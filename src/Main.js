import React from "react";

import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import WhatWill from "./Components/WhatWill/WhatWill";
import Creatives from "./Components/Creatives/Creatives";
import Price from "./Components/Price/Price";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export const Main = () => {
   return (
      <>
         <Nav />
         <Header />
         <Services />
         <About />
         <WhatWill />
         <Creatives />
         <Price />
         <Clients />
         <Contact />
         <Footer />
      </>
   );
};
