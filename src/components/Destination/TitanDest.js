import titan from "../../assets/destination/image-titan.png";

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
  return (
    <section className="destination" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="destination_left">
        <p>
          <span>01</span> Pick your destination
        </p>
        <img src={titan} alt="titan" />
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
        <h1>TITAN</h1>
        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you
          get striking views of the Rings of Saturn.
        </p>
        <hr />
        <div className="info_box">
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">1.6 BIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">7 YEARS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
