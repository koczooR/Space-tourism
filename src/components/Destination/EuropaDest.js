import europa from "../../assets/destination/image-europa.png";
import { useSpring, animated } from "react-spring";

export const EuropaDest = ({
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
        <animated.img src={europa} style={styles} alt="europa" />
      </div>
      <div className="destination_right">
        <nav>
          <ul>
            <li onClick={moonDestination}>MOON</li>
            <li onClick={marsDestination}>MARS</li>
            <li onClick={europaDestination} className={currentDestination === 2 && "active"}>
              EUROPA
            </li>
            <li onClick={titanDestination}>TITAN</li>
          </ul>
        </nav>
        <animated.h1 style={styles}>EUROPA</animated.h1>
        <animated.p style={styles}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
          skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </animated.p>
        <animated.hr style={styles} />
        <animated.div className="info_box" style={styles}>
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">628 MIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">3 YEARS</p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
