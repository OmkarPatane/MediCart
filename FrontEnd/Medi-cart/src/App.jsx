import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import Medicine from "./pages/Medicine";
import Login from "./pages/Login";
// import Features from "./components/Features";
import Footer from "./components/Footer";
import MedicinePage from "./pages/MedicinePage";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine/:medicineName" element={<MedicinePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/feature" element={<Features />} /> */}
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
