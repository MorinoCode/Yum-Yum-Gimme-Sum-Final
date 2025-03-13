import "./TotalPrice.scss";
import { useSelector } from "react-redux";

// varinat = kvitto vissas "Inkl 20% moms" under Total
// variant = cart vissas inget under Total

const TotalPrice = ({ variant }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  const moms = variant === "kvitto";
  return (
    <article className="TotalPriceContainer">
      <div className="TotalTex">
        <h1>TOTALT</h1>
        {moms ? "Inkl 20% moms" : ""}
      </div>
      <h1>{totalPrice} SEK</h1>
    </article>
  );
};

export default TotalPrice;
