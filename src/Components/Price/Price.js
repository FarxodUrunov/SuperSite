import "./Price.scss";
import { TiArrowSortedDown } from "react-icons/ti"; 

import React from "react";

const Price = () => {

	let color1 = "";
	const onSubmit = () => {
		color1 = "color1";
	}

   return (
      <div className="containers">
         <div className="price__block">
            <h2>.price</h2>
            <p>Select the service you want</p>
            <div className="dropdown__btn">
				   <button type="submit">SMM
				   	<TiArrowSortedDown className="dropdown__arr"/>
				   </button>

            </div>
            <div className="rows">
               <div className="cols-4">
                  <div className="price__card">
                     <p>
                        <b className={color1}>Acceleration</b><br/> Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                     </p>
                     <button onClick={onSubmit} type="submit">Select</button>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="price__card">
                     <p>
                        <b>Powerfull business</b><br/> Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                     </p>
                     <button type="submit">Select</button>
                  </div>
               </div>
               <div className="cols-4">
                  <div className="price__card">
                     <p>
                        <b>Turbo</b><br/> Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                     </p>
                     <button type="submit">Select</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Price;
