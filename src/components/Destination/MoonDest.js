import moon from "../../assets/destination/image-moon.png";
import { useSpring, animated } from "react-spring";

export const MoonDest = ({
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
        <animated.img src={moon} style={styles} alt="moon" />
      </div>
      <div className="destination_right">
        <nav>
          <ul>
            <li onClick={moonDestination} className={currentDestination === 0 && "active"}>
              MOON
            </li>
            <li onClick={marsDestination}>MARS</li>
            <li onClick={europaDestination}>EUROPA</li>
            <li onClick={titanDestination}>TITAN</li>
          </ul>
        </nav>
        <animated.h1 style={styles}>MOON</animated.h1>
        <animated.p style={styles}>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there,
          take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </animated.p>
        <animated.hr style={styles} />
        <animated.div className="info_box" style={styles}>
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">384,400 KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">3 DAYS</p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
