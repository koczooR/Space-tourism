import pilot from "../../assets/crew/image-victor-glover.png";

export const PilotCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew }) => {
  return (
    <section className="crew">
      <div className="crew_left">
        <p>
          <span>02</span> Meet your crew
        </p>
        <p className="crew_title">Pilot</p>
        <h1>Victor Glover</h1>
        <p className="crew_description">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he
          pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
        </p>
        <nav>
          <ul>
            <li>
              <span onClick={commanderCrew}></span>
            </li>
            <li>
              <span onClick={specialistCrew}></span>
            </li>
            <li>
              <span onClick={pilotCrew}></span>
            </li>
            <li>
              <span onClick={engineerCrew}></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="crew_right">
        <img src={pilot} alt="commander" />
      </div>
    </section>
  );
};