import specialist from "../../assets/crew/image-mark-shuttleworth2.png";
import { useSpring, animated } from "react-spring";

export const SpecialistCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew, currentCrew, onTouchStart, onTouchMove, onTouchEnd }) => {
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
          Mission Specialist{" "}
        </animated.p>
        <animated.h1 style={styles}>MARK SHUTTLEWORTH</animated.h1>
        <animated.p className="crew_description" style={styles}>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the
          first South African to travel to space as a space tourist.
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
        <animated.img src={specialist} style={styles} alt="commander" />
      </div>
    </section>
  );
};
