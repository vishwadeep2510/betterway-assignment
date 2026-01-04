## 🛒 Mini E-Commerce Application (React + Redux)

A mini e-commerce frontend application built using React and Redux Toolkit, featuring product listing, search & filtering, cart management, and persistent state — designed with clean architecture and real-world UI patterns.

### Features
---
- 📦 Product listing from DummyJSON API

- 🔍 Search products (debounced)

- 🏷️ Filter by category

- ↕️ Sort by price (Low → High / High → Low)

- 🛒 Shopping cart with quantity controls

- 💾 Cart persistence using localStorage

- 🧾 Cart summary (total items & total price)

- 🪟 Product details modal

- ⚡ Optimized rendering using React.memo & useMemo

### Project Architecture
```bash
src/
│
├── api/
│   └── productsApi.js
│
├── app/
│   └── store.js
│
├── features/
│   ├── products/
│   │   └── productsSlice.js
│   └── cart/
│       └── cartSlice.js
│
├── components/
│   ├── filters/
│   │   └── Filters.jsx
│   │
│   ├── products/
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductModal.jsx
│   │   └── EmptyProducts.jsx
│   │
│   └── cart/
│       ├── Cart.jsx
│       ├── CartItem.jsx
│       └── EmptyCart.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   └── ProductPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### Installation Guide
---
📥Step 1: Clone the Repository

```bash
git clone https://github.com/vishwadeep2510/betterway-assignment
cd betterway-assignment
```
📦 Step 2: Install Dependencies

Install all required packages using npm:
```bash
npm install
```
▶️ Step 3: Run the Application

Start the development server:
```bash
npm run dev
```
The app will be live at http://localhost:5173








