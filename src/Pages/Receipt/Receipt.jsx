import "./Receipt.scss";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import LogoReceipt from "../../assets/images/logo.png";
import CartItem from "../../Components/CartItem/CartItem";
import TotalPrice from "../../Components/TotalPrice/TotalPrice";
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'
import { newOrderHandler } from "../../Redux/Reducers/CartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Receipt = () => {
    const order = useSelector((state) => state.order.order);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
  return (
    <section className="receiptContainer">

      <Navbar variant={"statusPage"}>
        <Logo />
      </Navbar>

      <article className="receiptList">

        <div className="receiptHeader">
          <div className="receiptImage">
            <img src={LogoReceipt} alt="Logo" />
          </div>
          <div className="receiptTitle">
            <h1>Kvitto</h1>
            <p>ORDER ID : # {order.order? order.order.id: 'Inga order Hittades'}</p>
          </div>
        </div>
        <div className="receptItems">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
          <TotalPrice variant={"kvitto"} />
        </div>

      </article>

      <article className='receiptButtons'>
        <Button onClick={()=>dispatch(newOrderHandler())} variant={'darkBtn'}><Link to={'/menu'}> GÖR EN NY BESTÄLLNING </Link></Button>
      </article>

    </section>
  );
};

export default Receipt;
