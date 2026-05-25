import abt1 from "../assets/images/abt1.png";
import abt2 from "../assets/images/abt2.png";
import abt3 from "../assets/images/abt5.png";
import abt4 from "../assets/images/abt3.png";
import abt5 from "../assets/images/abt4.png";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

const About = () => {

    useGSAP(() => {
        const split = SplitText.create("h2", {
          type: "words, chars, lines",
        });

        gsap.from(split.words, {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.02,
          ease: "expo.out",

          scrollTrigger: {
            trigger: "#about h2",
            start: "top 80%",
          },
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top center"
          }
        }).from(".top-grid div, .bottom-grid div", {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        }, 0)


    }, []) 

  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content mb-15">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>

            <h2 className="text">Where every detail matters -from muddle to garnish</h2>
          </div>

          <div className="sub-content">
            <p className="splitted">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="">
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy"></div>
            <img src={abt1} alt="grid-img-1" />
          </div>

          <div className="md:col-span-6">
            <div className="noisy"></div>
            <img src={abt2} alt="grid-img-1" />
          </div>

          <div className="md:col-span-3">
            <div className="noisy"></div>
            <img src={abt3} alt="grid-img-1" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy"></div>
            <img src={abt4} alt="grid-img-1" />
          </div>

          <div className="md:col-span-4">
            <div className="noisy"></div>
            <img src={abt5} alt="grid-img-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
