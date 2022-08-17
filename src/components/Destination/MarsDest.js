import mars from "../../assets/destination/image-mars.png";
import { useSpring, animated } from "react-spring";

export const MarsDest = ({
  moonDestination,
  marsDestination,
  europaDestination,
  titanDestination,
  currentDestination,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  const styles = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  });

  return (
    <section className="destination" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="destination_left">
        <p>
          <span>01</span> Pick your destination
        </p>
        <animated.img src={mars} style={styles} alt="mars" />
      </div>
      <div className="destination_right">
        <nav>
          <ul>
            <li onClick={moonDestination}>MOON</li>
            <li onClick={marsDestination} className={currentDestination === 1 && "active"}>
              MARS
            </li>
            <li onClick={europaDestination}>EUROPA</li>
            <li onClick={titanDestination}>TITAN</li>
          </ul>
        </nav>
        <animated.h1 style={styles}>MARS</animated.h1>
        <animated.p style={styles}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a
          half times the size of Everest!
        </animated.p>
        <animated.hr style={styles} />
        <animated.div className="info_box" style={styles}>
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">225 MIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">9 MONTHS</p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
