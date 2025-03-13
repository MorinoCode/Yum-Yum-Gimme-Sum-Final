import "./CartItem.scss";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../Redux/Reducers/CartSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartItem = ({ cartItem, variant }) => {
  const dispatch = useDispatch();

  const showButtons = variant === "inCart";

  // Decrease item quantity or remove it
  const decreaseHandler = () => {
    if (cartItem.quantity === 1) {
      toast(`❌ ${cartItem.name} har tagits bort från varukorgen`);
    }

    dispatch(decreaseItemQuantity(cartItem.id));
  };

  // Increase item quantity
  const increaseHandler = () => {
    dispatch(increaseItemQuantity(cartItem.id));
  };

  return (
    <section className="CartItemContainer">
      <div className="CartItemTitle">
        <h3>{cartItem.name}</h3>
        <div className="CartItemquantity">
          {showButtons ? (
            <>
              <Button variant={"decrease"}>
                <CiSquareMinus onClick={decreaseHandler} />
              </Button>
              <span className="CartItemquantityNumber">
                {cartItem.quantity} st
              </span>
              <Button variant={"increase"}>
                <CiSquarePlus onClick={increaseHandler} />
              </Button>
            </>
          ) : (
            <span className="CartItemquantityNumber">
              {cartItem.quantity} st
            </span>
          )}
        </div>
      </div>
      <div className="CartItemTotalPrice">
        <h3>{cartItem.price} SEK</h3>
        <p>{cartItem.totalPrice} SEK</p>
      </div>
      <Toaster position="top-left" />
    </section>
  );
};

export default CartItem;
