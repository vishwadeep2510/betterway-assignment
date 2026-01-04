import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Product Image */}
      <img src={item.thumbnail} alt={item.title} />

      {/* Product Info */}
      <div className="info">
        <p>{item.title}</p>
        <small>${item.price.toFixed(2)}</small>

        {/* Quantity Controls */}
        <div className="qty">
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  qty: item.quantity - 1
                })
              )
            }
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  qty: item.quantity + 1
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <button
        className="remove"
        onClick={() => dispatch(removeItem(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
