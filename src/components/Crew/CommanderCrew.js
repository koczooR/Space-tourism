import commander from "../../assets/crew/image-douglas-hurley.png";
import { useSpring, animated } from "react-spring";

export const CommanderCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew, currentCrew, onTouchStart, onTouchMove, onTouchEnd }) => {
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
          Commander
        </animated.p>
        <animated.h1 style={styles}>Douglas Hurley</animated.h1>
        <animated.p className="crew_description" style={styles}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.
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
        <animated.img src={commander} style={styles} alt="commander" />
      </div>
    </section>
  );
};
