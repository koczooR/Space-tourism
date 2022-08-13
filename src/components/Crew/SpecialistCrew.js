import specialist from "../../assets/crew/image-mark-shuttleworth2.png";

export const SpecialistCrew = ({ commanderCrew, specialistCrew, pilotCrew, engineerCrew, currentDestination }) => {
  return (
    <section className="crew">
      <div className="crew_left">
        <p>
          <span>02</span> Meet your crew
        </p>
        <p className="crew_title">Mission Specialist </p>
        <h1>MARK SHUTTLEWORTH</h1>
        <p className="crew_description">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the
          first South African to travel to space as a space tourist.
        </p>
        <nav>
          <ul>
            <li>
              <span onClick={commanderCrew} className={currentDestination === 0 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={specialistCrew} className={currentDestination === 1 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={pilotCrew} className={currentDestination === 2 ? "active" : "inactive"}></span>
            </li>
            <li>
              <span onClick={engineerCrew} className={currentDestination === 3 ? "active" : "inactive"}></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="crew_right">
        <img src={specialist} alt="commander" />
      </div>
    </section>
  );
};
