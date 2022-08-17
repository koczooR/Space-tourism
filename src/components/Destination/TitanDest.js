import titan from "../../assets/destination/image-titan.png";
import { useSpring, animated } from "react-spring";

export const TitanDest = ({
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
        <animated.img src={titan} style={styles} alt="titan" />
      </div>
      <div className="destination_right">
        <nav>
          <ul>
            <li onClick={moonDestination}>MOON</li>
            <li onClick={marsDestination}>MARS</li>
            <li onClick={europaDestination}>EUROPA</li>
            <li onClick={titanDestination} className={currentDestination === 3 && "active"}>
              TITAN
            </li>
          </ul>
        </nav>
        <animated.h1 style={styles}>TITAN</animated.h1>
        <animated.p style={styles}>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you
          get striking views of the Rings of Saturn.
        </animated.p>
        <animated.hr style={styles} />
        <animated.div className="info_box" style={styles}>
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">1.6 BIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">7 YEARS</p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
