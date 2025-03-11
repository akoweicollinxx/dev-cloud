import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";

import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Navbar } from "./sections/Navbar";
import PricingTable from "./components/PricingTable";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <PricingTable/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
