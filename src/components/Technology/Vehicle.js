import { useSpring, animated } from "react-spring";

export const Vehicle = ({ vehicle, spaceport, capsule, currentTech, onTouchStart, onTouchMove, onTouchEnd }) => {
  const styles = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  });

  return (
    <section className="technology" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="technology_left">
        <p>
          <span>03</span> Space launch 101
        </p>
        <div className="container">
          <div className="steps">
            <ul>
              <li>
                <span onClick={vehicle} className={currentTech === 0 ? "active" : "inactive"}>
                  1
                </span>
              </li>
              <li>
                <span onClick={spaceport} className={currentTech === 1 ? "active" : "inactive"}>
                  2
                </span>
              </li>
              <li>
                <span onClick={capsule} className={currentTech === 2 ? "active" : "inactive"}>
                  3
                </span>
              </li>
            </ul>
          </div>
          <animated.div className="description" style={styles}>
            <p className="p1">THE TERMINOLOGY…</p>
            <h1>LAUNCH VEHICLE</h1>
            <p className="text">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or
              beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </p>
          </animated.div>
        </div>
      </div>
      <div className="technology_right">
        <animated.div className="img_container" style={styles}></animated.div>
      </div>
    </section>
  );
};
