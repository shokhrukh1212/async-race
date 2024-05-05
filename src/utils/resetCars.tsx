import { Dispatch, SetStateAction } from "react";
import { CarItemType } from "../types/interfaces";
import fetchApi from "./api";

const resetCars = async (
        currentCars: CarItemType[],
        setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>,
    ) => {
    const updatedCars = await Promise.all(currentCars.map(async (car) => {
        const data = await fetchApi("PATCH", `engine?id=${car.id}&status=stopped`);
        if (data) {
            return { ...car, distance: 0, duration: 0 };
        }
        return car;
    }));

    setCurrentCars(updatedCars);
};

export default resetCars;
