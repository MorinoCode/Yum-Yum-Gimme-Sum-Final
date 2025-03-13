import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Cart from "../Pages/Cart/Cart";
import Status from "../Pages/Status/Status";
import Receipt from "../Pages/Receipt/Receipt";
import ReadMore from "../Pages/ReadMore/ReadMore";
import Notfound from '../Pages/Notfound/Notfound'
import RecieptHistory from "../Pages/RecieptHistory/RecieptHistory";
import RecieptHistoryDetails from "../Pages/RecieptHistoryDetails/RecieptHistoryDetails";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<ReadMore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/status" element={<Status />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/recieptHistory" element={<RecieptHistory />} />
        <Route path="/recieptHistory/:id" element={<RecieptHistoryDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
