import europa from "../../assets/destination/image-europa.png";

export const EuropaDest = ({ moonDestination, marsDestination, europaDestination, titanDestination }) => {
  return (
    <section className="destination">
      <div className="destination_left">
        <p>
          <span>01</span> Pick your destination
        </p>
        <img src={europa} alt="europa" />
      </div>
      <div className="destination_right">
        <nav>
          <ul>
            <li onClick={moonDestination}>MOON</li>
            <li onClick={marsDestination}>MARS</li>
            <li onClick={europaDestination}>EUROPA</li>
            <li onClick={titanDestination}>TITAN</li>
          </ul>
        </nav>
        <h1>EUROPA</h1>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
          skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <hr />
        <div className="info_box">
          <div className="info_box-left">
            <p className="info_title">AVG. DISTANCE</p>
            <p className="info_value">628 MIL. KM</p>
          </div>
          <div className="info_box-right">
            <p className="info_title">EST. TRAVEL TIME</p>
            <p className="info_value">3 YEARS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
