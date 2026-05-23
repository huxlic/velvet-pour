import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import logo from "../assets/images/logo.png";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="px-2">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <p className="">Velvet Pour</p>
        </a>

        <ul className="flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.id} className="">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
