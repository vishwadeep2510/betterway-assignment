import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import ProductModal from "./ProductModal";

const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const cartItem = useSelector(state =>
    state.cart.items.find(item => item.id === product.id)
  );

  return (
    <>
      <div className="card">
        
        <img
          src={product.thumbnail}
          alt={product.title}
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }}
        />

        <div className="card-body">
     
          <h4
            onClick={() => setOpen(true)}
            style={{ cursor: "pointer" }}
          >
            {product.title}
          </h4>

          <span className="category">{product.category}</span>

          <div className="row">
            <strong>${product.price}</strong>
            <span className="stock">In Stock</span>
          </div>

  
          <button
            className="primary"
            onClick={() => dispatch(addToCart(product))}
          >
            {cartItem ? "Add More" : "Add to Cart"}
          </button>
        </div>
      </div>


      {open && (
        <ProductModal
          product={product}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
});

export default ProductCard;
