import engineer from "../../assets/crew/image-anousheh-ansari.png";

export const EngineerCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew }) => {
  return (
    <section className="crew">
      <div className="crew_left">
        <p>
          <span>02</span> Meet your crew
        </p>
        <p className="crew_title">Flight Engineer</p>
        <h1>Anousheh Ansari</h1>
        <p className="crew_description">
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first
          self-funded woman to fly to the ISS, and the first Iranian in space.
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
        <img src={engineer} alt="commander" />
      </div>
    </section>
  );
};