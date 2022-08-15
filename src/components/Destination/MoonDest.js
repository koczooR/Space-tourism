import moon from "../../assets/destination/image-moon.png";

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
  return (
    <section className="destination" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="destination_left">
        <p>
          <span>01</span> Pick your destination
        </p>
        <img src={moon} alt="moon" />
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
        <h1>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there,
          take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <hr />
        <div className="info_box">
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">384,400 KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">3 DAYS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
