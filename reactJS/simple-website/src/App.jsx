import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import InfoAbout from "./components/InfoAbout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import GalleryPage from "./pages/GalleryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<>  <Header /><HomePage /></>} ></Route>
      

        <Route path="/contact" element={<ContactUsPage />}></Route>

        <Route path='/gallery' element={<GalleryPage />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
