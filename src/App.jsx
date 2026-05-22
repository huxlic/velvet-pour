import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      {/* <div className="h-[150vh] w-full bg-black"></div> */}
    </div>
  );
};

export default App;
