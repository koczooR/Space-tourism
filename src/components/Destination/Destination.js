import { useState } from "react";
import { EuropaDest } from "./EuropaDest";
import { MarsDest } from "./MarsDest";
import { MoonDest } from "./MoonDest";
import { TitanDest } from "./TitanDest";

export const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);

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
        />
      );
    default:
  }
  return;
};
