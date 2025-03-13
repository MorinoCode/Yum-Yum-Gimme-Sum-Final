import "./Status.scss";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import FoodBox from "../../assets/images/Foodbox.png";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newOrderHandler } from "../../Redux/Reducers/CartSlice/cartSlice";
import { useEffect } from "react";

const Status = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const eta = order?.order?.eta;
  
  useEffect(()=>{
    dispatch(newOrderHandler())
  },[])


  
  
  const checkReceipt = () => {
    if (order) {
      navigate("/receipt");
    } else {
      navigate("/status");
    }
  };
  return (
    <section className="statusContainer">
      <Navbar variant={"statusPage"}>
        <Logo />
      </Navbar>

      <article className="statusImage">
        <img src={FoodBox} alt="FoodBox" />
      </article>

      <article className="statusDescription">
        <h1>DINA WONTOS TILLAGAS!</h1>
        <h3> ETA : {eta} </h3>
        <p>ORDER ID : #{order.order ? order.order.id: "Inga order Hittades"}</p>
      </article>

      <article className="statusButtons">
        <Button onClick={()=>dispatch(newOrderHandler())} variant={"darkBtn"}>
          <Link to={"/menu"}> GÖR EN NY BESTÄLLNING </Link>
        </Button>
        <Button variant={"lightBtn"} onClick={checkReceipt}>
          SE KVITTO
        </Button>
      </article>
    </section>
  );
};

export default Status;
