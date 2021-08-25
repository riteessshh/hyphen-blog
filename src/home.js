import React from "react";
import Navbar from "./component/home/navbar";
import Hero from "./component/home/hero";
import UpperSection from "./component/home/up-sect";
import LowerSection from "./component/home/low-sect";
import Footer from "./component/home/footer";

function Home() {
  return (
    <div>
      <Navbar color="black" />
      <Hero />
      <UpperSection />
      <LowerSection />
      <Footer />
    </div>
  );
}

export default Home;
