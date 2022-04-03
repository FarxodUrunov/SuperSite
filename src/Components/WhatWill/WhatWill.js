import "./WhatWill.scss";

import React from "react";

const WhatWill = () => {
   return (
      <div className="containers">
         <div className="whatWill__block">
            <h2>.what will you get</h2>
            <div className="rows">
               <span className="span doira-1"></span>
               <span className="span doira-2"></span>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__1">
                     <span>
                        <img src="img/Vector.svg" alt="" />
                     </span>
                     <h4>.quality</h4>
                     <p>We guarantee high-quality work, unique design and strict adherence to deadline.</p>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__2">
                     <span>
                        <img src="img/Vector2.svg" alt="" />
                     </span>
                     <h4>.result</h4>
                     <p>We work for the result, therefore we discuss all the requirements and wishes of the client in order to reach the final goal.</p>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__3">
                     <span>
                        <img src="img/Vector3.svg" alt="" />
                     </span>
                     <h4>.strategy</h4>
                     <p>We will develop a strategy which will make your business more reliable.</p>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__4">
                     <span>
                        <img src="img/Vector4.svg" alt="" />
                     </span>
                     <h4>.speed</h4>
                     <p>We work quickly and efficiently, working in a short time with the best result</p>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__5">
                     <span>
                        <img src="img/Vector5.svg" alt="" />
                     </span>
                     <h4>.clients</h4>
                     <p>We provide the target audience that is looking for your product or service and is ready to become your customers.</p>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="whatWill__card box-shadow__6">
                     <span>
                        <img src="img/Vector6.svg" alt="" />
                     </span>
                     <h4>.honesty</h4>
                     <p>During the work, you will see our actions, receive reports on the work done and the growth of your business.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WhatWill;
