
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";
const App = () => {
  return(
    <>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      </Routes>

      <Footer />

      {/* <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      </Switch> */}

    </>
  )
}

export default App;
