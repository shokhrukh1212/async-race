import { Dispatch, SetStateAction } from "react";
import { CarItemType, WinnerCarType } from "../types/interfaces";
import fetchApi from "./api";

const resetCars = async (
        currentCars: CarItemType[],
        winners: WinnerCarType[],
        setWinners: Dispatch<SetStateAction<WinnerCarType[]>>,
        setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>,
    ) => {
        try {
            // Setting isVisible false for all current cars
            const newWinners = winners.map((w: WinnerCarType) => {
                return { ...w, isVisible: false };
            });
            setWinners(newWinners);

            // Making all current cars come back to their initial place
            const updatedCars = await Promise.all(currentCars.map(async (car) => {
                const data = await fetchApi("PATCH", `engine?id=${car.id}&status=stopped`);
                if (data) {
                    return { ...car, distance: 0, duration: 0 };
                }
                return car;
            }));

            setCurrentCars(updatedCars);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
};

export default resetCars;
