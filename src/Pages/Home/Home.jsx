import "./Home.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/menu");
    }, 3000);
  }, []);
  

  return (
    <section className="homeContainer">
      <span className="homeLogo">
        <img src={logo} alt="AppLogo" />
      </span>
    </section>
  );
};

export default Home;
