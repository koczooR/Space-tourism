export const Capsule = ({ vehicle, spaceport, capsule, currentTech }) => {
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
            <h1>SPACE CAPSULE</h1>
            <p className="text">
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule
              is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
            </p>
          </div>
        </div>
      </div>
      <div className="technology_right technology_right-capsule">
        <div className="img_container img_container-capsule"></div>
      </div>
    </section>
  );
};
