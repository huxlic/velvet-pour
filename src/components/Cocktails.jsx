import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import ctLeftLeaf from "../assets/images/cocktail-left-leaf.png";
import ctRightLeat from "../assets/images/cocktail-right-leaf.png";
import gsap from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "80%",
        scrub: true,
      },
    });

    tl.from("#c-left-leaf", {
      x: -100,
      y: 100,
    }).from(
      "#c-right-leaf",
      {
        x: 100,
        y: 200,
        delay: .1,
      },
      0,
    );
  }, []);

  return (
    <section
      id="cocktails"
      className="noisy relative z-10 min-h-dvh w-full overflow-hidden"
    >
      <img src={ctLeftLeaf} alt="cocktail left leaf" id="c-left-leaf" />
      <img src={ctRightLeat} alt="cocktail right leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2 className="">Most popular cocktails:</h2>

          <ul className="">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2 className="">Most loved mocktails:</h2>

          <ul className="">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
