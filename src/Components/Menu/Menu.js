import "./Menu.scss";

import { ImCancelCircle } from "react-icons/im";

import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
   return (
      <div className="menu__block">
         <Link to="/">
            <ImCancelCircle />
         </Link>
		   <ul>
			   <li>
				   <Link to="/">home</Link>
			   </li>
            <li>
               <Link to="/services">services</Link>
            </li>
            <li>
               <Link to="/about">about us</Link>
            </li>
            <li>
               <Link to="/creatives">
                  creatives <span>(portfolio)</span>
               </Link>
            </li>
            <li>
               <Link to="/price">price</Link>
            </li>
            <li>
               <Link to="/clients">clients</Link>
            </li>
            <li>
               <Link to="/contact">contact</Link>
            </li>
         </ul>
      </div>
   );
};

export default Menu;
