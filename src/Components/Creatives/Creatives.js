import "./Creatives.scss";

import { BsArrowDown } from "react-icons/bs";

import React from "react";

const Creatives = () => {
   return (
      <div className="containers">
         <div className="creatives__block">
            <h2>.creatives</h2>
            <p>our portfolio</p>
            <div className="rows">
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle5.png" alt="" />
                  </div>
               </div>
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle2.png" alt="" />
                  </div>
               </div>
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle3.png" alt="" />
                  </div>
               </div>
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle4.png" alt="" />
                  </div>
               </div>
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle5.png" alt="" />
                  </div>
               </div>
               <div className="cols-4">
                  <div className="portfolio__card">
                     <img src="img/Rectangle6.png" alt="" />
                  </div>
               </div>
            </div>
            <button className="swipe__btn" type="submit">
               more
               <BsArrowDown className="header__arr" />
            </button>
         </div>
      </div>
   );
};

export default Creatives;
