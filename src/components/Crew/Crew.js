import { useState } from "react";
import { CommanderCrew } from "./CommanderCrew";
import { EngineerCrew } from "./EngineerCrew";
import { PilotCrew } from "./PilotCrew";
import { SpecialistCrew } from "./SpecialistCrew";

export const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentCrew((prevState) => prevState + 1);
      if (currentCrew === 3) {
        setCurrentCrew(0);
      }
    }
    if (isRightSwipe) {
      setCurrentCrew((prevState) => prevState - 1);
      if (currentCrew === 0) {
        setCurrentCrew(3);
      }
    }
  };

  const commanderCrew = () => {
    setCurrentCrew(0);
  };

  const specialistCrew = () => {
    setCurrentCrew(1);
  };

  const pilotCrew = () => {
    setCurrentCrew(2);
  };

  const engineerCrew = () => {
    setCurrentCrew(3);
  };

  switch (currentCrew) {
    case 0:
      return (
        <CommanderCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentCrew={currentCrew}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 1:
      return (
        <SpecialistCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentCrew={currentCrew}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 2:
      return (
        <PilotCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentCrew={currentCrew}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 3:
      return (
        <EngineerCrew
          commanderCrew={commanderCrew}
          specialistCrew={specialistCrew}
          pilotCrew={pilotCrew}
          engineerCrew={engineerCrew}
          currentCrew={currentCrew}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    default:
  }
  return;
};
