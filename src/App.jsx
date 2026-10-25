
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './Component/pages/LoginSignup';
import Shop from './Component/pages/Shop';
import Shopcategory from './Component/pages/Shopcategory';
import Product from './Component/pages/Product';
import Cart from './Component/pages/Cart';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/assets/MenBanner.jpg'
import women_banner from './Component/assets/Womenbanner.jpg'
import kids_banner from './Component/assets/Kidsbanner.jpg'
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Shopcategory banner={men_banner} Category="men" />} />
        <Route path="/women" element={<Shopcategory banner={women_banner} Category="women" />} />
        <Route path="/kids" element={<Shopcategory banner={kids_banner} Category="kids" />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
