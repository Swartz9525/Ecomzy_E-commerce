import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="w-full h-[4rem] bg-slate-950 flex justify-center items-center z-10 relative">
      <div className="w-[70%] h-[4rem] flex justify-between items-center">
        <NavLink to={"/"}>
          <img src="../logo.png" className="h-12" />
        </NavLink>
        <div className="text-white w-[10%] h-[4rem] flex justify-center items-center gap-8">
          <NavLink to={"/"}>
            <button className="text-xl">Home</button>
          </NavLink>
          <NavLink to={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <span className="w-5 h-5 text-xs text-white bg-green-600 absolute -top-1 -right-2 rounded-full flex justify-center items-center animate-bounce">
                {cart.length}
              </span>
              {/* {
                cart.length >0 && 
                
               } */}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
