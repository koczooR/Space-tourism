import commander from "../../assets/crew/image-douglas-hurley.png";

export const CommanderCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew }) => {
  return (
    <section className="crew">
      <div className="crew_left">
        <p>
          <span>02</span> Meet your crew
        </p>
        <p className="crew_title">Commander</p>
        <h1>Douglas Hurley</h1>
        <p className="crew_description">
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.
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
        <img src={commander} alt="commander" />
      </div>
    </section>
  );
};
