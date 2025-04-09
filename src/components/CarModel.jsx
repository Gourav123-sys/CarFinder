import React from "react";
import { X } from "lucide-react";

const CarModel = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-md w-full relative text-black dark:text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <X size={20} />
        </button>

        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">Brand: {car.brand}</p>
        <p className="text-gray-700 dark:text-gray-300">Fuel: {car.fuel}</p>
        <p className="text-gray-700 dark:text-gray-300">Seats: {car.seats}</p>
        <p className="text-xl font-bold mt-2">${car.price}</p>
      </div>
    </div>
  );
};

export default CarModel;
