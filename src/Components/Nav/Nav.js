import "./Nav.scss";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok, FaTelegram, FaSearch } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import React from "react";

const Nav = () => {
   return (
      <div className="containers">
         <div className="nav__block">
            <div className="nav-left">
               <p>address:</p>
               <div>
                  <h5>Tashkent city Yunusabad</h5>
                  <h5>Construction Center 227-office</h5>
               </div>
            </div>
            <div className="nav-right">
               <ul>
                  <li>
                     <a href="https://www.instagram.com/supersite.uz/?utm_medium=copy_link">
                        <AiFillInstagram />
                     </a>
                  </li>
                  <li>
                     <a href="#dd">
                        <FaTiktok />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.t.me/supersite_uz">
                        <FaTelegram />
                     </a>
                  </li>
                  <li>
                     <a href="http://supersite.uz/ordered"><MdAlternateEmail /></a>
                  </li>
               </ul>
               <form>
                  <input type="search" />
                  <button>
                     <FaSearch />
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Nav;
