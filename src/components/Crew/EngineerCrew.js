import engineer from "../../assets/crew/image-anousheh-ansari.png";
import { useSpring, animated } from "react-spring";

export const EngineerCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew, currentCrew, onTouchStart, onTouchMove, onTouchEnd }) => {
  const styles = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  });

  return (
    <section className="crew" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="crew_left">
        <p>
          <span>02</span> Meet your crew
        </p>
        <animated.p className="crew_title" style={styles}>
          Flight Engineer
        </animated.p>
        <animated.h1 style={styles}>Anousheh Ansari</animated.h1>
        <animated.p className="crew_description" style={styles}>
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first
          self-funded woman to fly to the ISS, and the first Iranian in space.
        </animated.p>
        <nav>
          <ul>
            <li>
              <span onClick={commanderCrew} className={currentCrew === 0 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={specialistCrew} className={currentCrew === 1 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={pilotCrew} className={currentCrew === 2 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={engineerCrew} className={currentCrew === 3 ? "active" : "inactive"}></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="crew_right">
        <animated.img src={engineer} style={styles} alt="commander" />
      </div>
    </section>
  );
};
