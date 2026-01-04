import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce(
    (s, i) => s + i.price * i.quantity,
    0
  );

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="summary">
        <div>Total Items: {totalItems}</div>
        <div>Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Cart;
