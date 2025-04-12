import React from "react";

const Filters = ({ filters, setFilters, search, setSearch }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-800 shadow rounded-lg mb-4">

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cars..."
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Brand</label>
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="">All</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Ford">Ford</option>
          <option value="Chevrolet">Chevrolet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fuel</label>
        <select
          value={filters.fuel}
          onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sort by Price</label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
