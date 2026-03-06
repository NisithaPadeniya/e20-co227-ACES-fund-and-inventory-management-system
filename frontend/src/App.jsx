import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import FundForm from "./pages/FundForm";
import InventoryForm from "./pages/InventoryForm";

import About from "./pages/About";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px=[9vw]">
      <ScrollToTop />
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        {/* Protected Routes  */}
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/fund-form" element={<PrivateRoute><FundForm /></PrivateRoute>} />
        <Route path="/inventory-form" element={<PrivateRoute><InventoryForm /></PrivateRoute>} />
        <Route path="/product/:productId" element={<PrivateRoute><Product /></PrivateRoute>} />

        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fund-form" element={<FundForm />} />
        <Route path="/inventory-form" element={<InventoryForm />} />
        <Route path="/product/:productId" element={<Product />} /> */}


        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
