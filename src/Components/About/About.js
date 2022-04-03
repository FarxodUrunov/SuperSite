import "./About.scss";

import React from "react";

const About = () => {
   return (
      <div className="about__block" id="about">
         <div className="containers">
            <h2>.about us</h2>
            <div className="about__text">
               <p>
                  We are a full-service marketing agency with three years of experience and projects in the CIS countries and the USA. We provide an indvidual
                  approach to every client and offer the experience and expertise of our agency at a fraction of the lost.
               </p>
               <p>
                  We want to understand your business goals upfront, so we can create a startegic plan aimed at helping you achieve your target.We avoid
                  cookie-cutting work.
               </p>
			   </div>
			   <div className="about__box"></div>
         </div>
      </div>
   );
};

export default About;
