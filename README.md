# 🚗 Car Finder App

[🌐 Live Demo](https://car-finder-jade.vercel.app/)

A sleek and responsive car listing application built using **React**, **Tailwind CSS**, and **Vite**. Users can filter, search, sort, wishlist, and add cars to a cart. Supports dark mode and dynamic car fetching from a live API.

## 🖼️ Preview

> Images are dynamically fetched from Unsplash using live URLs!

![Car Finder Screenshot](https://source.unsplash.com/featured/?car)

---

## ✨ Features

- 🔍 **Search** cars by name
- 🏷️ **Filter** by brand, fuel type, and seat capacity
- 💸 **Sort** by price (Low to High / High to Low)
- 🛒 **Add to Cart** (toggle to "Remove from Cart")
- 💖 **Wishlist** functionality with persistent storage
- 🌙 **Dark Mode** toggle
- 🧾 **Car Details Modal** on click
- 📦 Pagination support
- 💾 LocalStorage-based cart and wishlist persistence

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Unsplash](https://unsplash.com/) (for dynamic car images)
- [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/) (for car data)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>=14)
- npm / yarn

### Installation

```bash
git clone https://github.com/your-username/car-finder-app.git
cd car-finder-app
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 📂 Project Structure

```
📁 src
├── components
│   ├── CarCard.jsx         # Displays each car with wishlist/cart buttons
│   ├── CarModel.jsx        # Modal for car details
│   ├── DarkModeToggle.jsx  # Light/Dark toggle
│   ├── Filters.jsx         # Filter dropdowns
│   ├── Pagination.jsx      # Pagination controls
├── hooks
│   └── useLocalStorage.js  # Custom hook for localStorage
├── utils
│   └── api.js              # API call to fetch car models
├── App.jsx                 # Main app component
├── main.jsx                # App entry point
├── index.css               # Tailwind styles
```

---

## 🔍 API Usage

Fetching car models dynamically via:

```js
https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/{make}?format=json
```

Images are retrieved from:

```js
https://source.unsplash.com/400x200/?{Model_Name},car
```

---

## 💾 Persistent State

- Cart and Wishlist are saved using `localStorage` via a custom hook: `useLocalStorage.js`.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Acknowledgements

- Vehicle data from [NHTSA API](https://vpic.nhtsa.dot.gov/api/)
- Car images via [Unsplash](https://unsplash.com/)
- Tailwind UI inspirations

---

## 🧑‍💻 Author

**Built with ❤️ by [Gourav Mondal]**
