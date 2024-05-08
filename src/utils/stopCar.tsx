import { Dispatch, SetStateAction } from "react";
import { CarItemType } from "../types/interfaces";
import fetchApi from "./api";

const stopCarItem = async (
        item: CarItemType,
        currentCars: CarItemType[],
        setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>,
    ) => {
    try {
        const data = await fetchApi("PATCH", `engine?id=${item.id}&status=stopped`);
        if (data) {
            const newCars = currentCars.map((car) => {
                if (car.id === item.id) {
                    return { ...item, duration: 0, distance: 0 };
                }
                return car;
            });
            setCurrentCars(newCars);
        }
        return null;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        return null;
    }
};

export default stopCarItem;
