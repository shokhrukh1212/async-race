import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarContext, initialState } from "../context/CarContext";
import { CarItemType, WinnerCarType } from "../types/interfaces";

const useDeleteCar = (item: CarItemType) => {
    const { cars, setCars, setChosenCar, winners, setWinners } = useContext(CarContext);

    const handleDelete = async () => {
        try {
            const res = await fetchApi("DELETE", `garage/${item.id}`);
            if (!res) return null;

            const newCars = cars.filter((car) => car.id !== item.id);
            setCars(newCars);
            setChosenCar(initialState);

            // If the car is in winners list, we should also delete it from winners
            const indexOfWinner = winners.findIndex((w: WinnerCarType) => w.id === item.id);
            if (indexOfWinner === -1) return null;

            const winRes = await fetchApi("DELETE", `winners/${item.id}`);
            if (!winRes) return null;
            const newWinners = winners.filter((w: WinnerCarType) => w.id !== item.id);
            setWinners(newWinners);

            return null;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            return null;
        }
    };

    return handleDelete;
};

export default useDeleteCar;
