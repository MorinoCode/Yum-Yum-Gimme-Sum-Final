import React, { useEffect } from "react";
import "./Notfound.scss";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate= useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate('/menu')
    }, 3000);
  },[])
  return (
    <>
      <div className="notFoundContainer">
        <h2>Sidan Finns Inte</h2>
      </div>
    </>
  );
};

export default Notfound;
