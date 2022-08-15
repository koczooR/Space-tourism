import mars from "../../assets/destination/image-mars.png";

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
  return (
    <section className="destination" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="destination_left">
        <p>
          <span>01</span> Pick your destination
        </p>
        <img src={mars} alt="mars" />
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
        <h1>MARS</h1>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a
          half times the size of Everest!
        </p>
        <hr />
        <div className="info_box">
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">225 MIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">9 MONTHS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
