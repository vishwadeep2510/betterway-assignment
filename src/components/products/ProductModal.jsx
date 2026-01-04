import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function ProductModal({ product, onClose }) {
  const dispatch = useDispatch();

  const cartItem = useSelector(
    state => state.cart.items.find(i => i.id === product.id)
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={e => e.stopPropagation()} // prevent close on modal click
      >
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="modal-image"
        />

        {/* Content */}
        <div className="modal-content">
          <h3>{product.title}</h3>
          <p className="modal-category">{product.category}</p>

          <p className="modal-price">${product.price}</p>

          <p className="modal-desc">{product.description}</p>

          <p className="modal-stock">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button
            className="primary"
            disabled={product.stock === 0}
            onClick={() => dispatch(addToCart(product))}
          >
            {cartItem ? "Add More" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
