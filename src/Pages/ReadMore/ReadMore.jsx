import { useNavigate, useParams } from "react-router-dom";
import "./ReadMore.scss";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import CartIcon from "../../Components/CartIcon/CartIcon";
import foodBox from "../../assets/images/Foodbox.png";
import {  useSelector } from "react-redux";
import Button from "../../Components/Button/Button";

const ReadMore = () => {
  const { id } = useParams();
  const menuList = useSelector((state) => state.menu.menuList);
  const navigate= useNavigate()
  const {theme} = useSelector(state => state.theme)
  

  const selectedFood = menuList.find((item) => item.id == id); 
  if (!selectedFood) {
    return <h1>Food item not found</h1>; 
  }

  

  return (
    <section className={`readMoreContainer ${theme}`}>

      <Navbar variant={"menuPage"}>
        <Logo variant={"dark"} />
        <CartIcon />
      </Navbar>

      <div className="foodContainer">

        <div className="foodInfo">
          <h2>{selectedFood.name}</h2>
          <h4>Typ: {selectedFood.type}</h4>
          <h4 className="foodIngredienser">
            Ingredienser:{" "}
            {selectedFood.ingredients?.map((ingredient, index) => (
              <span key={index}>{ingredient}, </span>
            ))}
          </h4>
          <h5>Beskrivning: {selectedFood.description}</h5>
          <h5>Price: {selectedFood.price} SEK</h5>
          <Button onClick={()=> navigate(-1)} variant={'readMoreBtn'}>Tillbaka</Button>
          
        </div>

        <div className="foodImage">
          <img src={foodBox} alt="FoodBox" />
        </div>

      </div>
    </section>
  );
};

export default ReadMore;
