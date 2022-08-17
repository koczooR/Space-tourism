import pilot from "../../assets/crew/image-victor-glover.png";
import { useSpring, animated } from "react-spring";

export const PilotCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew, currentCrew, onTouchStart, onTouchMove, onTouchEnd }) => {
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
          Pilot
        </animated.p>
        <animated.h1 style={styles}>Victor Glover</animated.h1>
        <animated.p className="crew_description" style={styles}>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he
          pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
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
        <animated.img src={pilot} style={styles} alt="commander" />
      </div>
    </section>
  );
};
