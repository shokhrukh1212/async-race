import { Dispatch, SetStateAction } from "react";
import startCarItem from "./startCar";
import { CarItemType, WinnerCarType } from "../types/interfaces";

const raceCars = async (
  currentCars: CarItemType[],
  setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>,
  width: number,
  winners: WinnerCarType[],
  setWinners: Dispatch<SetStateAction<WinnerCarType[]>>,
) => {
  const results = await Promise.all(currentCars.map(async (car: CarItemType) => {
    return startCarItem(car, width, currentCars, setCurrentCars);
  }));

  let winner = { id: 0, duration: Infinity };
  results.forEach((res) => {
    if (res && res.duration < winner.duration) {
      winner = { id: res.id, duration: res.duration };
    }
  });

  if (winner && winner.id !== 0) {
    const indexOfWinner = winners.findIndex((item: WinnerCarType) => item.id === winner.id);
    const winnerCar = currentCars.find((car) => car.id === winner.id);
    if (winnerCar) {
      if (indexOfWinner === -1) {
        const { name, color, id } = winnerCar;
        const newWinner = { isVisible: true, id, color, name, time: Number(winner.duration.toFixed(2)), wins: 1 };
        const newWinners = winners.map((w: WinnerCarType) => { return { ...w, isVisible: false }; });
        newWinners.push(newWinner);
        setWinners(newWinners);
      } else {
        const existWinner = winners[indexOfWinner];
        if (existWinner) {
          const newWinner = { ...existWinner, isVisible: true, time: Number(winner.duration.toFixed(2)), wins: existWinner.wins + 1 };
          const newWinners = winners.map((w: WinnerCarType) => { return { ...w, isVisible: false }; });
          newWinners[indexOfWinner] = newWinner;
          setWinners(newWinners);
        }
      }
    }
  }
};

export default raceCars;
