import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Cocktails/>
      <div className="h-[500vh]"></div>
    </div>
  );
};

export default App;
