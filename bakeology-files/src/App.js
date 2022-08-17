import './App.css';
import  Home from "./Pages/Home";
import  About from "./Pages/About";
import  Menu from "./Pages/Menu";
import  Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/Menu" element={ <Menu /> } />
      <Route path="/About" element={ <About /> } />
      <Route path="/Contact" element={ <Contact /> } />
    </Routes>
    <Footer />
  </div>
  )
}

 
