import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Cocktails/>
      <About/>
    </div>
  );
};

export default App;
