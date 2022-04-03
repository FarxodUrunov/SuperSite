import "./Clients.scss";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";

const Clients = () => (
   <div className="clients__block">
      <div className="containers">
         <h2>.our clients</h2>

         <Carousel
            slidesPerPage={2}
            slidesPerScroll={1}
            infinite
            animationSpeed={1500}
            autoPlay={1000}
            stopAutoPlayOnHover
            offset={10}
            itemWidth={190}
            clickToChange
            centered
         >
            <img src="img/Rectangle6.png" alt="" />
            <img src="img/Rectangle5.png" alt="" />
            <img src="img/Rectangle3.png" alt="" />
            <img src="img/Rectangle3.png" alt="" />
            <img src="img/Rectangle4.png" alt="" />
            <img src="img/Rectangle6.png" alt="" />
            <img src="img/Rectangle3.png" alt="" />
            <img src="img/Rectangle2.png" alt="" />
            <img src="img/Rectangle3.png" alt="" />
         </Carousel>
      </div>
   </div>
);

export default Clients;
