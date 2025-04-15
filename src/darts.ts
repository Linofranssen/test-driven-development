export function calcPoints(input: string): number {
  const throws = input.split(" ").map(Number);
  let points = 0;

  for (let i = 0; i < throws.length; i += 2) {
    const multiplier = throws[i];
    const sector = throws[i + 1];

    if (multiplier >= 1 && multiplier <= 3 && sector >= 1 && sector <= 20) {
      points += multiplier * sector;
    } else if (multiplier === 2 && sector === 25) {
        points += 50
    } else if (multiplier === 1 && sector === 25){
      points += 25;
    }
  }

  return points;
}

export function possibleCheckout(remainingPoints: number): string | null {
  if (remainingPoints % 2 === 0) {
    const doubleSector = remainingPoints / 2;
    if (doubleSector >= 1 && doubleSector <= 20) {
      return `Double ${doubleSector}`;
    } else if (doubleSector === 25) {
      return "Double Bull"
    }

  }
  return null;
}