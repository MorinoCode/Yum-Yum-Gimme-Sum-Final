
import { useNavigate } from "react-router-dom";
import "./OrderHistoryItem.scss";
import { useDispatch } from "react-redux";

const OrderHistoryItem = ({ order }) => {
    const navigate= useNavigate()
    
  

 
  return (
    <section onClick={()=> navigate(`/recieptHistory/${order.id}`)} className="OrderHistoryItemContainer">
      <div className="OrderHistoryItemTitle">
        <h5> Order Id : {order.id}</h5>
      </div>
      <div className="OrderHistoryItemTime">
        <h5> Order Datum : {new Date(order.timestamp).toLocaleDateString("sv-SE")} </h5>
      </div>
    </section>
  );
};

export default OrderHistoryItem;
