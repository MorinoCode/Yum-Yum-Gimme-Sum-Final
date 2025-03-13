
import "./Cart.scss";
import Navbar from "../../Components/Navbar/Navbar";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartItems from "../../Components/CartItems/CartItems";
import TotalPrice from "../../Components/TotalPrice/TotalPrice";
import Button from "../../Components/Button/Button";
import Logo from "../../Components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOrderHandler } from "../../Redux/Reducers/OrderSlice/orderSlice";
import { useState } from "react"; 

const Cart = () => {
  const { theme } = useSelector((state) => state.theme);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemsId = cartItems.map((item) => item.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null); 

  const orderHandler = () => {
    if (cartItems.length === 0) {
      setError("Din varukorg är tom. Lägg till artiklar innan du beställer.");
      return;
    }
    setError(null); 
    dispatch(sendOrderHandler(cartItemsId));
    setTimeout(() => {
      navigate(cartItems.length >= 1 ? "/status" : "/cart");
    }, 0);
  };

  return (
    <section className={`cartContainer ${theme}`}>
      <Navbar variant={"menuPage"}>
        <Logo variant={"dark"} />
        <CartIcon />
      </Navbar>

      <CartItems />

      {error && <div className="errorMessage">{error}</div>}

      <div className="cartTotal">
        <TotalPrice variant={"cart"} />
        <Button variant={"darkBtn"} onClick={orderHandler}>
          TAKE MY MONEY!
        </Button>
      </div>
    </section>
  );
};

export default Cart;
