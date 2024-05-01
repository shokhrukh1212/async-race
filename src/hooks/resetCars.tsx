import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarContext } from "../context/CarContext";

const useResetCars = () => {
    const { cars, setCars } = useContext(CarContext);

    const handleResetCars = async () => {
        const updatedCars = await Promise.all(cars.map(async (car) => {
            const data = await fetchApi("PATCH", `engine?id=${car.id}&status=stopped`);
            if (data) {
                return { ...car, distance: 0, duration: 0 };
            }
            return car;
        }));

        setCars(updatedCars);
    };

    return { handleResetCars };
};

export default useResetCars;
