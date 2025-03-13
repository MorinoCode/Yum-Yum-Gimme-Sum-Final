import "./RecieptHistory.scss";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import LogoReceipt from "../../assets/images/logo.png";
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'
import { newOrderHandler } from "../../Redux/Reducers/CartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderHistoryItem from "../../Components/OrderHistoryItem/OrderHistoryItem";

const RecieptHistory = () => {
    const { theme } = useSelector((state) => state.theme);
    const orders = useSelector((state) => state.order.orders);
    const dispatch = useDispatch();
  
  return (
    <section className={`receiptContainer ${theme}`}>

      <Navbar variant={"statusPage"}>
        <Logo />
      </Navbar>

      <article className="receiptList">

        <div className="receiptHeader">
          <div className="receiptImage">
            <img src={LogoReceipt} alt="Logo" />
          </div>
          <div className="receiptTitle">
            <h1>Kvitton</h1>
          </div>
        </div>
        <div className="receptItems">
        {orders.map(order => <OrderHistoryItem key={order.order.id} order={order.order} />)}
        </div>

      </article>

      <article className='receiptButtons'>
        <Button onClick={()=>dispatch(newOrderHandler())} variant={'darkBtn'}><Link to={'/menu'}> GÖR EN NY BESTÄLLNING </Link></Button>
      </article>

    </section>
  );
};

export default RecieptHistory;
