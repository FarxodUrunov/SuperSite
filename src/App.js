import { Main } from "./Main";
import Menu from "./Components/Menu/Menu";
import Services from "./Components/Services/Services";
import Nav from "./Components/Nav/Nav";
import MenuImg from "./Components/MenuImg/MenuImg";
import About from "./Components/About/About";
import Creatives from "./Components/Creatives/Creatives";
import Price from "./Components/Price/Price";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/services" element={<><Nav/> <MenuImg/> <Services /> <Footer/></>} />
            <Route path="/about" element={<><Nav/> <MenuImg/> <About /> <Footer/></>} />
            <Route path="/creatives" element={<><Nav/> <MenuImg/> <Creatives /> <Footer/></>} />
            <Route path="/price" element={<><Nav/> <MenuImg/> <Price /> <Footer/></>} />
            <Route path="/clients" element={<><Nav/> <MenuImg/> <Clients /> <Footer/></>} />
            <Route path="/contact" element={<><Nav/> <MenuImg/> <Contact /> <Footer/></>} />
         </Routes>
      </>
   );
}

export default App;
