import { useState } from "react";
import { EuropaDest } from "./EuropaDest";
import { MarsDest } from "./MarsDest";
import { MoonDest } from "./MoonDest";
import { TitanDest } from "./TitanDest";

export const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentDestination((prevState) => prevState + 1);
      if (currentDestination === 3) {
        setCurrentDestination(0);
      }
    }
    if (isRightSwipe) {
      setCurrentDestination((prevState) => prevState - 1);
      if (currentDestination === 0) {
        setCurrentDestination(3);
      }
    }
  };

  const moonDestination = () => {
    setCurrentDestination(0);
  };

  const marsDestination = () => {
    setCurrentDestination(1);
  };

  const europaDestination = () => {
    setCurrentDestination(2);
  };

  const titanDestination = () => {
    setCurrentDestination(3);
  };

  switch (currentDestination) {
    case 0:
      return (
        <MoonDest
          moonDestination={moonDestination}
          marsDestination={marsDestination}
          europaDestination={europaDestination}
          titanDestination={titanDestination}
          currentDestination={currentDestination}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 1:
      return (
        <MarsDest
          moonDestination={moonDestination}
          marsDestination={marsDestination}
          europaDestination={europaDestination}
          titanDestination={titanDestination}
          currentDestination={currentDestination}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 2:
      return (
        <EuropaDest
          moonDestination={moonDestination}
          marsDestination={marsDestination}
          europaDestination={europaDestination}
          titanDestination={titanDestination}
          currentDestination={currentDestination}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );

    case 3:
      return (
        <TitanDest
          moonDestination={moonDestination}
          marsDestination={marsDestination}
          europaDestination={europaDestination}
          titanDestination={titanDestination}
          currentDestination={currentDestination}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      );
    default:
  }
  return;
};
