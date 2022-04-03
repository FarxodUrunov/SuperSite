import "./Header.scss";
import MenuImg from "../MenuImg/MenuImg";

import { BsArrowDown } from "react-icons/bs";

import React from "react";

const Header = () => {
   return (
      <div className="header__block">
         <MenuImg/>
         
         <div className="containers">
            <div className="header__title">
               <h2>Your thrilling results in online</h2>
               <h1>About your brand!</h1>
               <p>We are a full-service marketing agency that provides an individual approach yo every client</p>
            </div>
         </div>

         <button className="swipe__btn" type="submit">
            swipe
            <BsArrowDown className="header__arr" />
         </button>
      </div>
   );
};

export default Header;
