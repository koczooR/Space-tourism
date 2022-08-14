export const Spaceport = ({ vehicle, spaceport, capsule, currentTech }) => {
  return (
    <section className="technology">
      <div className="technology_left">
        <p>
          <span>03</span> Space launch 101
        </p>
        <div className="container">
          <div className="steps">
            <ul>
              <li>
                <span onClick={vehicle} className={currentTech === 0 ? "active" : "inactive"}>
                  1
                </span>
              </li>
              <li>
                <span onClick={spaceport} className={currentTech === 1 ? "active" : "inactive"}>
                  2
                </span>
              </li>
              <li>
                <span onClick={capsule} className={currentTech === 2 ? "active" : "inactive"}>
                  3
                </span>
              </li>
            </ul>
          </div>
          <div className="description">
            <p className="p1">THE TERMINOLOGY…</p>
            <h1>SPACEPORT</h1>
            <p className="text">
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in
              the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
            </p>
          </div>
        </div>
      </div>
      <div className="technology_right technology_right-spaceport">
        <div className="img_container img_container-spaceport"></div>
      </div>
    </section>
  );
};
