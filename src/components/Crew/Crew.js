import { useState } from "react";
import { CommanderCrew } from "./CommanderCrew";
import { EngineerCrew } from "./EngineerCrew";
import { PilotCrew } from "./PilotCrew";
import { SpecialistCrew } from "./SpecialistCrew";

export const Crew = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

  const commanderCrew = () => {
    setCurrentDestination(0);
  };

  const specialistCrew = () => {
    setCurrentDestination(1);
  };

  const pilotCrew = () => {
    setCurrentDestination(2);
  };

  const engineerCrew = () => {
    setCurrentDestination(3);
  };

  switch (currentDestination) {
    case 0:
      return (
        <CommanderCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentDestination={currentDestination}
        />
      );

    case 1:
      return (
        <SpecialistCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentDestination={currentDestination}
        />
      );

    case 2:
      return (
        <PilotCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentDestination={currentDestination}
        />
      );

    case 3:
      return (
        <EngineerCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentDestination={currentDestination}
        />
      );

    default:
  }
  return;
};
