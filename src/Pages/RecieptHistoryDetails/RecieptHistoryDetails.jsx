import "./RecieptHistoryDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../../Components/CartIcon/CartIcon";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";

const RecieptHistoryDetails = () => {
  const { theme } = useSelector((state) => state.theme);
  const { id } = useParams();
  const orders = useSelector((state) => state.order.orders);
  const selectedOrder = orders.find((order) => order.order.id === id);
  const navigate = useNavigate()

  if (!selectedOrder) {
    return <h1>Order ej funnen</h1>;
  }

  return (
    <div className={`RecieptHistoryContainer ${theme}`}>
      <Navbar variant={"menuPage"}>
        <Logo />
        <CartIcon />
      </Navbar>
      <section className="ReciptHistoryDetails">
        <h1>Orderdetaljer</h1>
        <p>
          <strong>Order ID:</strong> {selectedOrder.order.id}
        </p>
        <p>
          <strong>Tid:</strong>{" "}
          {new Date(selectedOrder.order.timestamp).toLocaleString()}
        </p>
        <Button onClick={()=> navigate(-1)} variant={'readMoreBtn'}>Tillbaka</Button>

        <h2>Beställda artiklar:</h2>
        <ul>
          {selectedOrder.order.items.map((item, index) => (
            <li key={index}>
              <p>
                <strong>Artikel:</strong> {item.name}
              </p>
              <p>
                <strong>Pris:</strong> {item.price} SEK
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RecieptHistoryDetails;
