import { useEffect } from "react";
import CartIcon from "../../Components/CartIcon/CartIcon";
import Logo from "../../Components/Logo/Logo";
import MenuItems from "../../Components/MenuItems/MenuItems";
import Navbar from "../../Components/Navbar/Navbar";
import "./Menu.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../Redux/Reducers/MenuSlice/menuSlice";
import { fetchApiKey } from "../../Redux/Reducers/ApiKeySlice/apiKeySlice";
import { fetchTenant } from "../../Redux/Reducers/TenantSlice/tenantSlice";



const Menu = () => {
  const dispatch = useDispatch()
  const apiKey = useSelector(state => state.apiKey.apiKey)
  const {theme} = useSelector(state => state.theme)

  

  useEffect(() => {
    dispatch(fetchApiKey())
  }, [dispatch]);

  useEffect(() => {
    if(apiKey){
      dispatch(fetchMenu())
      dispatch(fetchTenant());
    }
  }, [apiKey]);

  

  return (
    <section className={`menuContainer ${theme}`}>
      
      <Navbar variant={"menuPage"}>
        <Logo />
        <CartIcon />
      </Navbar>

      <MenuItems />

    </section>
  );
};

export default Menu;

