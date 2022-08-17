import { useSpring, animated } from "react-spring";

export const Spaceport = ({ vehicle, spaceport, capsule, currentTech, onTouchStart, onTouchMove, onTouchEnd }) => {
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
            <h1>SPACEPORT</h1>
            <p className="text">
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in
              the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
            </p>
          </animated.div>
        </div>
      </div>
      <div className="technology_right technology_right-spaceport">
        <animated.div className="img_container img_container-spaceport" style={styles}></animated.div>
      </div>
    </section>
  );
};
