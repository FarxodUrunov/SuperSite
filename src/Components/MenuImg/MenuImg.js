import "./MenuImg.scss";
import { Link } from "react-router-dom";

import React from "react";

const MenuImg = () => {
   return (
      <React.Fragment>
         <div className="containers">
            <div className="header__box">
               <div className="header__menu">
                  <Link to="/menu">
                     <img src="Menu.svg" alt="menu" />
                  </Link>
                  <img className="logo" src="logo-S.svg" alt="logo" />
               </div>
               <div className="header__tel">
                  <img src="Group 2.svg" alt="logo-tel" />
                  <span>+99899 810 70 90</span>
               </div>
            </div>
         </div>
         <img className="header__vector" src="Vector 1.svg" alt="vector" />
      </React.Fragment>
   );
};

export default MenuImg;
