import "./App.css";
import Product from "./components/Product";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Enterprise from "./components/Enterprise";

function App() {
  //TODO: Fix css for mobile designs
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Enterprise />
    </>
  );
}

export default App;
