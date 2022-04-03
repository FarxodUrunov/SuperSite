import "./Services.scss";
import { BsArrowDown } from "react-icons/bs";

import React from "react";
import Contact from "../Contact/Contact";

const Services = () => {
   return (
      <div className="services__block containers" id="services">
         <h2>.services</h2>
         <div className="rows">
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/custom-web-development 1.png" alt="" />
                     <span>01</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.WEB Developing</h3>
                  <p>Our experienced designers are focused on modern web design techniques that take your business to the next level</p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web fon 1.svg" alt="" />
                     <span>02</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.WEB Design</h3>
                  <p>Order an award-winning web design in one of the best web design firms,to generate more traffic,leads,and sales</p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web 1.svg" alt="" />
                     <span>03</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.MOBILE APP DEVELOPMENT</h3>
                  <p>Development of applications with a fully managed server infrastructure,the abilty to monitor performance and stability</p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web2.svg" alt="" />
                     <span>04</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.seo</h3>
                  <p>Customized SEO services tailored to your unique business needs.Get free analysis,strategy, forecast, projects,plan and KPI for free.</p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web3.svg" alt="" />
                     <span>05</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.SMM</h3>
                  <p>
                     Supersite is your full-service social media agency An exceptional social media identity that delivers long-term results and immidiate ROI
                     is our trademarket
                  </p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web4.svg" alt="" />
                     <span>06</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.development of telegram bots</h3>
                  <p>
                     Bring people and technology together for amazing social media results.We help you boost your customer experience,resulting in englared
                     opportunities and increased ROI
                  </p>
               </div>
            </div>
            <div className="cols-4">
               <div className="services__card">
                  <div className="card__img">
                     <img src="img/web5.svg" alt="" />
                     <span>07</span>
                     <button className="swipe__btn" type="submit">
                        more
                        <BsArrowDown className="header__arr" />
                     </button>
                  </div>
                  <h3>.advertisement</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing text of the print</p>
               </div>
            </div>
            <div className="cols-8">
               <div className="services__contact">
                  <Contact />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
