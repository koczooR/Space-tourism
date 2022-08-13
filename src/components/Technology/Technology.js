import { useState } from "react";
import { Capsule } from "./Capsule";
import { Spaceport } from "./Spaceport";
import { Vehicle } from "./Vehicle";

export const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0);

  const vehicle = () => {
    setCurrentTech(0);
  };

  const spaceport = () => {
    setCurrentTech(1);
  };

  const capsule = () => {
    setCurrentTech(2);
  };

  switch (currentTech) {
    case 0:
      return <Vehicle vehicle={vehicle} spaceport={spaceport} capsule={capsule} currentTech={currentTech} />;

    case 1:
      return <Spaceport vehicle={vehicle} spaceport={spaceport} capsule={capsule} currentTech={currentTech} />;

    case 2:
      return <Capsule vehicle={vehicle} spaceport={spaceport} capsule={capsule} currentTech={currentTech} />;

    default:
  }
  return;
};
