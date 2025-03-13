import "./MenuItemFood.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  cartQuantityHandler,
  addedItemsToCard,
} from "../../Redux/Reducers/CartSlice/cartSlice";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MenuItemFood = ({ id, name, price, ingredients }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Add to cart handler
  const addToCartHandler = () => {
    const existingItem = cartItems.find((item) => item.id === id);
    toast(`✅ ${name} lagt i din varukorg`);

    if (existingItem) {
      dispatch(addedItemsToCard({ id }));
    } else {
      dispatch(
        addedItemsToCard({ id, name, price, quantity: 1, totalPrice: price })
      );
    }

    dispatch(cartQuantityHandler());
  };

  return (
    <section className="MenuItemFoodContainer">
      <article className="MenuItemFoodTitlePrice">
        <h2>{name}</h2>
        <h2>{price ? `${price} SEK` : "Pris saknas"}</h2>
      </article>
      <article className="MenuItemFoodDescription">
        <p>
          {ingredients && ingredients.length > 0
            ? ingredients.map((ingredient, index) => (
                <span key={index}>{ingredient}, </span>
              ))
            : "Inga ingredienser listade"}
        </p>
      </article>
      <Button onClick={() => addToCartHandler()} variant={"readMoreBtn"}>
        Lägg Till
      </Button>
      <Button onClick={() => navigate(`/menu/${id}`)} variant={"readMoreBtn"}>
        Läs Mer
      </Button>
      <Toaster position="top-left" />
    </section>
  );
};

export default MenuItemFood;
