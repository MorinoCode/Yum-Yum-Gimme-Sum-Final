import "./Logo.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon } from "react-icons/fa6";
import {themeChanger} from '../../Redux/Reducers/ThemeSlice/themeSlice'


const Logo = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme} = useSelector( state => state.theme)
  const dispatch = useDispatch()
  
  const themeHandler = ()=>{
    dispatch(themeChanger())
  }
  return (
    <div className="logoWrapper">
      <span
        className={`logoContainer ${variant || ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>Y Y G S</p>
      </span>

      {isOpen && (
        <div className="logonav">
          <span onClick={() => setIsOpen(!isOpen)}>
            <IoIosCloseCircle className="logonav_close" />
          </span>
          <div>
            <ul className="logonav_list">
              <li>
                <Link to="/menu">Home</Link>
              </li>
              <li>
                <Link to="/status">Status</Link>
              </li>
              <li>
                <Link to="/recieptHistory">Kvitton</Link>
              </li>
            </ul>
            <span onClick={themeHandler}>
              {theme == 'light' ? <FiSun /> : <FaMoon />
              }
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
