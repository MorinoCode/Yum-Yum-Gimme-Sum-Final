
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./CartItems.scss";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <section className="cartItemsContainer">
      <article className="cartItemsList">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem  variant={'inCart'} key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p>Din varukorg är tom!</p> 
        )}
      </article>
    </section>
  );
};

export default CartItems;
