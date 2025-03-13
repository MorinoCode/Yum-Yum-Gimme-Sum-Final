import "./CartIcon.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsBasket3 } from "react-icons/bs";


const CartIcon = () => {
  const cartQuantity= useSelector((state) => state.cart.cartQuantity)
  const navigate = useNavigate()
  return (
    <span className="cartIconContainer" onClick={()=>navigate('/cart')}>
      <BsBasket3 className="cartIcon" />
      <span className="cartIconQuantity">{cartQuantity}</span>
    </span>
  );
};

export default CartIcon;
