import "./App.css";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Enterprise from "./components/Enterprise";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";

function App() {
  //TODO: Fix css for mobile designs
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Enterprise />
      <Features />
      <Pricing />
      <About />
    </>
  );
}

export default App;
