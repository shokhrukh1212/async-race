import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarContext } from "../context/CarContext";
import { CarItemType } from "../types/interfaces";

const useDeleteCar = (item: CarItemType) => {
    const { cars, setCars, setChosenCar } = useContext(CarContext);

    const handleDelete = async () => {
        try {
            const res = await fetchApi("DELETE", `garage/${item.id}`);
            if (res) {
                const newCars = cars.filter((car) => car.id !== item.id);
                setCars(newCars);
                setChosenCar({ id: 0, name: "", color: "", distance: 0, duration: 0 });
            }

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
