import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./api/productApi.js";
import { setProducts } from "./features/products/productsSlice";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      const products = await fetchProducts();
      dispatch(setProducts(products));
    }
    load();
  }, [dispatch]);

  return (
    <div className="app">
      <header className="header">Mini E-Commerce</header>

      <div className="content">
        <div className="left">
          <ProductPage />
        </div>
        <div className="right">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
