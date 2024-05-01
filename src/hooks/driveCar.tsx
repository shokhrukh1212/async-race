import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarItemType } from "../types/interfaces";
import { CarContext } from "../context/CarContext";

const useDriveCar = () => {
    const { cars, setCars } = useContext(CarContext);
    const handleDriveCar = async (
            item: CarItemType,
            width: number,
        ) => {
            try {
                const index = cars.findIndex((car) => car.id === item.id);
                const data = await fetchApi("PATCH", `engine?id=${item.id}&status=started`);
                if (data) {
                    const newCars = [...cars];
                    const distance = width - 280;
                    const duration = (distance / (data.velocity * 10)) * 5;
                    newCars[index] = { ...item, distance, duration };
                    setCars(newCars);

                    const data2 = await fetchApi("PATCH", `engine?id=${item.id}&status=drive`);
                    if (data2 === null) {
                        const newCars2 = [...cars];
                        newCars2[index] = { ...item, duration: 0, distance: 0 };
                        setCars(newCars2);
                    }
                }
                return null;
            } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            return null;
        }
    };

    return { handleDriveCar };
};

export default useDriveCar;
