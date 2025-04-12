import React, { useEffect, useState } from "react";
import CarCard from "./components/CarCard.jsx";
import Filters from "./components/Filters.jsx";
import Pagination from "./components/Pagination.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import useLocalStorage from "./hooks/useLocalStorage.jsx";
import { getCarModelsByMake } from "./utils/api.js";
import CarModel from "./components/CarModel.jsx";

const carsPerPage = 10;

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [filters, setFilters] = useState({ brand: "", fuel: "", sort: "" });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      const makes = ["Toyota", "Honda", "Hyundai", "Ford", "Chevrolet"];
      const allCars = [];

      for (const make of makes) {
        const models = await getCarModelsByMake(make);
        models.slice(0, 3).forEach((model, index) => {
          allCars.push({
            id: `${make}-${model.Model_ID}`,
            name: model.Model_Name,
            brand: model.Make_Name,
            fuel: index % 2 === 0 ? "Petrol" : "Diesel",
            price: 15000 + (index + 1) * 3000,
            seats: [4, 5, 6][index % 3],
            image: `https://cdn.imagin.studio/getimage?customer=img&make=${make}&modelFamily=${model.Model_Name}`,
          });
        });
      }

      setCars(allCars);
      setLoading(false);
    };

    fetchCars();
  }, []);

  useEffect(() => {
    let result = [...cars];

    if (filters.brand) result = result.filter((c) => c.brand === filters.brand);
    if (filters.fuel) result = result.filter((c) => c.fuel === filters.fuel);
    if (search) result = result.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    if (filters.sort === "asc") result.sort((a, b) => a.price - b.price);
    if (filters.sort === "desc") result.sort((a, b) => b.price - a.price);

    setFilteredCars(result);
    setPage(1);
  }, [cars, filters, search]);

  const paginatedCars = filteredCars.slice((page - 1) * carsPerPage, page * carsPerPage);

  const toggleWishlist = (car) => {
    if (wishlist.some((c) => c.id === car.id)) {
      setWishlist(wishlist.filter((c) => c.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  const toggleCart = (car) => {
    if (cart.some((c) => c.id === car.id)) {
      setCart(cart.filter((c) => c.id !== car.id));
    } else {
      setCart([...cart, car]);
    }
  };

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">🚗 Car Finder</h1>
          <DarkModeToggle dark={dark} setDark={setDark} />
        </div>

        <Filters filters={filters} setFilters={setFilters} search={search} setSearch={setSearch} />

        {loading ? (
          <p className="text-center text-lg">Loading cars...</p>
        ) : filteredCars.length === 0 ? (
          <p className="text-center text-red-500">No cars match the criteria.</p>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {paginatedCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  wishlist={wishlist}
                  onWishlistToggle={toggleWishlist}
                  onCarClick={setSelectedCar}
                  onAddToCart={toggleCart}
                  isInCart={cart.some((c) => c.id === car.id)}
                />
              ))}
            </div>
            <Pagination
              currentPage={page}
              total={filteredCars.length}
              onPageChange={setPage}
            />
          </>
        )}

        {selectedCar && <CarModel car={selectedCar} onClose={() => setSelectedCar(null)} />}
      </div>
    </div>
  );
}

export default App;
