import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarItemType } from "../types/interfaces";
import { CarContext } from "../context/CarContext";

const useStopCar = (item: CarItemType) => {
        const { cars, setCars } = useContext(CarContext);
        const handleStopCar = async () => {
            try {
                        const data = await fetchApi("PATCH", `engine?id=${item.id}&status=stopped`);
                        if (data) {
                            const newCars = cars.map((car) => {
                                if (car.id === item.id) {
                                    return { ...item, duration: 0, distance: 0 };
                                }
                                return car;
                            });
                            setCars(newCars);
                        }
                        return null;
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
                return null;
            }
    };

    return { handleStopCar };
};

export default useStopCar;
