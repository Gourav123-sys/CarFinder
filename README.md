# 🚗 Car Finder - Modern Car Browsing Application

[🌐 Live Demo](https://car-finder-jade.vercel.app/)

A modern, responsive web application that allows users to browse, search, filter, and manage car listings. Built with **React 19**, **Tailwind CSS**, and **Vite**, this single-page application provides an intuitive interface for car discovery with advanced filtering and personalization features.

## 🖼️ Preview

> Images are dynamically fetched from Imagin Studio using live URLs!

![Car Finder Screenshot](https://cdn.imagin.studio/getimage?customer=img&make=Toyota&modelFamily=Camry)

---

## ✨ Core Features

### 🚗 **Car Browsing & Display**

- **Dynamic Car Cards**: Attractive card format with high-quality images
- **Car Information**: Name, brand, fuel type, seating capacity, and pricing
- **Interactive Elements**: Click-to-view details and action buttons

### 🔍 **Advanced Search & Filtering**

- **Real-time Search**: Search cars by name with instant results
- **Brand Filtering**: Filter by specific car brands (Toyota, Honda, Hyundai, Ford, Chevrolet)
- **Fuel Type Filtering**: Filter by fuel type (Petrol/Diesel)
- **Price Sorting**: Sort cars by price (Low to High / High to Low)

### 👤 **User Interaction Features**

- **Wishlist Management**: Add/remove cars from personal wishlist with persistent storage
- **Shopping Cart**: Add/remove cars from cart with visual feedback
- **Car Details Modal**: Click on car images to view detailed information
- **Pagination**: Navigate through car listings with 10 cars per page

### 🎨 **User Experience Enhancements**

- **Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Visual feedback during data fetching
- **Empty State Handling**: User-friendly messages when no cars match criteria

---

## 🛠️ Technology Stack

### **Frontend Framework & Libraries**

- [React 19.0.0](https://reactjs.org/) - Latest version for component-based UI development
- [React DOM 19.0.0](https://reactjs.org/) - DOM rendering for React
- [Vite 6.2.0](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS 4.1.3](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion 12.6.3](https://www.framer.com/motion/) - Animation library for smooth transitions
- [Lucide React 0.487.0](https://lucide.dev/) - Modern icon library

### **HTTP Client & Data Fetching**

- [Axios 1.8.4](https://axios-http.com/) - Promise-based HTTP client for API calls

### **Development Tools**

- [ESLint 9.21.0](https://eslint.org/) - Code linting and quality assurance
- [TypeScript Support](https://www.typescriptlang.org/) - Type definitions for React and React DOM
- [React Hooks ESLint Plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces React Hooks rules

### **External APIs**

- [Imagin Studio](https://www.imagin.studio/) - Dynamic car image generation
- [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/) - Real car models data

---

## 🏗️ Architecture & Project Structure

### **Component Architecture**

```
📁 src
├── components/
│   ├── CarCard.jsx          # Individual car display component
│   ├── CarModel.jsx         # Modal for detailed car view
│   ├── DarkModeToggle.jsx   # Theme switching component
│   ├── Filters.jsx          # Search and filter controls
│   ├── Pagination.jsx       # Page navigation component
│   └── WishlistButton.jsx   # Wishlist management component
├── hooks/
│   └── useLocalStorage.jsx  # Custom hook for localStorage persistence
├── utils/
│   └── api.js              # API integration functions
├── App.jsx                  # Main application component
├── main.jsx                # Application entry point
├── index.css               # Tailwind styles
└── assets/
    └── Favicon.svg         # Application favicon
```

### **State Management**

- **React Hooks**: Uses `useState` and `useEffect` for local state management
- **Custom Hooks**: `useLocalStorage` for persistent data storage
- **Component Props**: Data flows through props and callback functions

---

## 🔌 API Integration

### **External APIs Used**

1. **NHTSA Vehicle API** (`https://vpic.nhtsa.dot.gov/api/`)

   - Fetches real car models by manufacturer
   - Used for: Toyota, Honda, Hyundai, Ford, Chevrolet models

2. **Imagin Studio** (`https://cdn.imagin.studio/`)
   - Dynamic car image generation
   - Images are generated based on car make and model

### **Data Flow Example**

```javascript
// API call to fetch car models
const response = await axios.get(
  `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
);

// Dynamic image generation
const imageUrl = `https://cdn.imagin.studio/getimage?customer=img&make=${make}&modelFamily=${model.Model_Name}`;
```

---

## 💾 Data Persistence

### **Local Storage Implementation**

- **Wishlist**: Persistent storage of user's favorite cars
- **Shopping Cart**: Persistent storage of selected cars
- **Custom Hook**: `useLocalStorage` manages localStorage operations

```javascript
const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
const [cart, setCart] = useLocalStorage("cart", []);
```

---

## 🎨 UI/UX Design

### **Design System**

- **Tailwind CSS**: Utility-first styling approach
- **Dark Mode**: Complete theme switching with CSS custom properties
- **Responsive Grid**: CSS Grid for responsive card layouts
- **Modern Icons**: Lucide React icons for consistent iconography

### **Color Scheme**

- **Light Mode**: White backgrounds with gray text
- **Dark Mode**: Dark gray backgrounds with white text
- **Accent Colors**: Blue for primary actions, red for wishlist, green for cart

### **Interactive Elements**

- **Hover Effects**: Smooth transitions on card interactions
- **Button States**: Visual feedback for different button states
- **Modal Overlays**: Backdrop blur effects for modals

---

## 🚀 Performance Features

### **Optimization Techniques**

- **Lazy Loading**: Images load on demand
- **Pagination**: Limits rendered items to 10 per page
- **Efficient Filtering**: Real-time filtering without unnecessary re-renders
- **Vite Build**: Fast development and optimized production builds

### **User Experience**

- **Loading States**: Visual feedback during data fetching
- **Error Handling**: Graceful error handling for API failures
- **Empty States**: Helpful messages when no results are found

---

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: Single column layout
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid layout

### **Mobile-First Approach**

- Responsive filters and search inputs
- Touch-friendly button sizes
- Optimized modal interactions for mobile

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (>=14)
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/car-finder-app.git
cd car-finder-app

# Install dependencies
npm install
```

### **Development**

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### **Production Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🔒 Security & Best Practices

### **Code Quality**

- **ESLint Configuration**: Enforces React best practices
- **React Hooks Rules**: Proper hooks usage patterns
- **Error Boundaries**: Graceful error handling

### **Data Handling**

- **API Error Handling**: Try-catch blocks for API calls
- **Input Validation**: Proper form handling
- **XSS Prevention**: Safe rendering of user data

---

## 🎯 Key Highlights

1. **Modern React Patterns**: Uses latest React 19 features and hooks
2. **Real-time Data**: Dynamic car data from live APIs
3. **Persistent State**: User preferences saved across sessions
4. **Accessibility**: Proper ARIA labels and semantic HTML
5. **Performance**: Optimized rendering and data fetching
6. **Scalability**: Modular component architecture
7. **User Experience**: Intuitive interface with smooth interactions

---

## 🙌 Acknowledgements

- Vehicle data from [NHTSA API](https://vpic.nhtsa.dot.gov/api/)
- Car images via [Imagin Studio](https://www.imagin.studio/)
- Tailwind UI inspirations
- React and Vite communities


