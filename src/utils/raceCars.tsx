import { Dispatch, MutableRefObject, SetStateAction } from "react";
import startCarItem from "./startCar";
import { CarItemType, WinnerCarType } from "../types/interfaces";
import createWinner from "./createWinner";
import updateWinner from "./updateWinner";

const raceCars = async (startTime: number, currentCars: CarItemType[], setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>, width: number, winners: WinnerCarType[], setWinners: Dispatch<SetStateAction<WinnerCarType[]>>, myWinnerRef: MutableRefObject<boolean>) => {
  const results = await Promise.all(currentCars.map(async (car: CarItemType) => {
    return startCarItem(car, width, currentCars, setCurrentCars);
  }));
  let winner = { id: 0, duration: Infinity };
  results.forEach((res) => {
    if (res && res.duration < winner.duration) winner = { id: res.id, duration: res.duration };
  });
  if (myWinnerRef.current && winner && winner.id !== 0) {
    const indexOfWinner = winners.findIndex((item: WinnerCarType) => item.id === winner.id);
    const winnerCar = currentCars.find((car: CarItemType) => car.id === winner.id);
    if (winnerCar) {
      const currentTime = new Date().getTime();
      const passedTime = (currentTime - startTime) / 1000;
      const { name, color, id } = winnerCar;
      if (indexOfWinner === -1) {
        const res = await createWinner(id, 1, Number(winner.duration.toFixed(2)));
        if (res) {
          const newWinner = { isVisible: true, id, color, name, time: res.time, wins: res.wins };
          const newWinners = winners.map((w: WinnerCarType) => { return { ...w, isVisible: false }; });
          newWinners.push(newWinner);
          if (passedTime < winner.duration) setTimeout(() => { setWinners(newWinners); }, (winner.duration - passedTime + 1) * 1000);
          else setWinners(newWinners);
        }
      } else {
        const existWinner = winners[indexOfWinner];
        if (existWinner) {
          const res = await updateWinner(id, existWinner.wins + 1, Math.min(Number(winner.duration.toFixed(2)), existWinner.time));
          if (res) {
            const newWinner = { ...existWinner, isVisible: true, time: res.time, wins: res.wins };
            const newWinners = winners.map((w: WinnerCarType) => { return { ...w, isVisible: false }; });
            newWinners[indexOfWinner] = newWinner;
            if (passedTime < winner.duration) setTimeout(() => { setWinners(newWinners); }, (winner.duration - passedTime + 1) * 1000);
            else setWinners(newWinners);
          }
        }
      }
    }
  }
};

export default raceCars;
