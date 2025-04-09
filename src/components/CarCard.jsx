import React from "react";

const CarCard = ({ car, wishlist, onWishlistToggle, onCarClick, onAddToCart, isInCart }) => {
  const isWished = wishlist.some((c) => c.id === car.id);

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded"
        onClick={() => onCarClick(car)}
      />
      <h3 className="mt-2 text-lg font-semibold">{car.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{car.brand} | {car.fuel} | {car.seats} seats</p>
      <p className="mt-1 text-blue-600 dark:text-blue-400 font-bold">${car.price}</p>

      <div className="mt-3 flex justify-between">
        <button
          onClick={() => onWishlistToggle(car)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            isWished
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          }`}
        >
          {isWished ? "Remove Wishlist" : "Add to Wishlist"}
        </button>

        <button
          onClick={() => onAddToCart(car)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            isInCart
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
