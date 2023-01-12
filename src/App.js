import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  //TODO: Fix css for mobile designs
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
