import "./Footer.scss";

import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok, FaTelegram} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import React from "react";

const Footer = () => {
   return (
      <div className="footer__block">
         <div className="containers">
            <div className="footer__box">
               <div className="footer__box1">
                  <img src="logo-black.svg" alt="logo" />
                  <p>Lorem Ipsum is simply dummy text of the printing text</p>
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
                        <a href="http://supersite.uz/ordered">
                           <MdAlternateEmail />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="footer__box1">
                  <h6>Email:</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing text</p>
               </div>
               <div className="footer__box1">
                  <h6>Address:</h6>
                  <p>8744 Main Street, Unit 403 Woodstock GA 30188</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
