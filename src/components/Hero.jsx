import { useGSAP } from "@gsap/react";
import leftLeaf from "../assets/images/hero-left-leaf.png";
import rightLeaf from "../assets/images/hero-right-leaf.png";
import video from "../assets/videos/output.mp4"
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });


  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      delay: 1,
      stagger: 0.05,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0,
      )
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0,
      );

      const start = isMobile ? "top 50%" : "center 60%";
      const end = isMobile ? "120% top" : "bottom top";
      
      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: start,
            end: end,
            scrub: true,
            pin: true,
        }
      })

      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        });
      }

  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img className="left-leaf" src={leftLeaf} alt="left leaf" />
        <img className="right-leaf" src={rightLeaf} alt="right leaf" />

        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
            <div className="space-y-5 hidden md:block">
              <p className="">Cool. Crisp. Classic.</p>
              <p className="font-modern-negra text-6xl text-center text-yellow max-w-xl subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>

              <a
                href="#cocktails"
                className="text-[18px] hover:text-yellow font-semibold"
              >
                View cocktails
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute mix-blend-screen inset-0">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
