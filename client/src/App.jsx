// import React from "react";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
import Loader from "./components/Loader";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Loader />
      <Footer />
    </div>
  );
};

export default App;
