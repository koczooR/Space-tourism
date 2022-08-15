import { useState } from "react";
import { Capsule } from "./Capsule";
import { Spaceport } from "./Spaceport";
import { Vehicle } from "./Vehicle";

export const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0);
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
      setCurrentTech((prevState) => prevState + 1);
      if (currentTech === 2) {
        setCurrentTech(0);
      }
    }
    if (isRightSwipe) {
      setCurrentTech((prevState) => prevState - 1);
      if (currentTech === 0) {
        setCurrentTech(2);
      }
    }
  };

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
      return (
        <Vehicle
          vehicle={vehicle}
          spaceport={spaceport}
          capsule={capsule}
          currentTech={currentTech}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 1:
      return (
        <Spaceport
          vehicle={vehicle}
          spaceport={spaceport}
          capsule={capsule}
          currentTech={currentTech}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 2:
      return (
        <Capsule
          vehicle={vehicle}
          spaceport={spaceport}
          capsule={capsule}
          currentTech={currentTech}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    default:
  }
  return;
};
