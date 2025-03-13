import "./SauceButton.scss";
import { useSelector, useDispatch } from "react-redux";
import {cartQuantityHandler,addedItemsToCard} from '../../Redux/Reducers/CartSlice/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
const SauceButton = ({ id, name, price }) => {
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // Add to cart handler
 // Add to cart handler
 const addToCartHandler = () => {
  const existingItem = cartItems.find(item => item.id === id);
  toast(`✅ ${name} lagt i din varukorg`);
  if (existingItem) {
    // Bara uppdatera kvantiteten i Redux reduceraren
    dispatch(addedItemsToCard({ id }));
  } else {
    // Skapa ett nytt objekt och skicka det till Redux
    dispatch(addedItemsToCard({ id, name, price, quantity: 1, totalPrice: price }));
  }

  // Uppdatera varukorgens totala kvantitet
  dispatch(cartQuantityHandler());
};
  return (
    <button className={`sauceButton ${theme}`} onClick={() => addToCartHandler()}>
      {name}
    </button>
  );
};

export default SauceButton;
