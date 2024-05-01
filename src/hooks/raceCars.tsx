import { useContext } from "react";
import fetchApi from "../utils/api";
import { CarContext } from "../context/CarContext";

const useRaceCars = (width: number) => {
    const { currentCars, setCurrentCars } = useContext(CarContext);

    const handleRaceCars = async () => {
        await Promise.all(currentCars.map(async (car) => {
            const data = await fetchApi("PATCH", `engine?id=${car.id}&status=started`);
            if (!data) return;
            const distance = width - 280;
            const duration = (distance / (data.velocity * 10)) * 5;
            setCurrentCars((prevCars) => {
                const index = prevCars.findIndex((c) => c.id === car.id);
                if (index !== -1) {
                    const updatedCar = { ...car, distance, duration };
                    const newCars = [...prevCars];
                    newCars[index] = updatedCar;
                    return newCars;
                }
                return prevCars;
            });

            // fetchApi("PATCH", `engine?id=${car.id}&status=drive`)
            //     .catch(() => {
            //         setCars((prevCars) => {
            //             const index = prevCars.findIndex((c) => c.id === car.id);
            //             if (index !== -1) {
            //                 const stoppedCar = { ...car, duration: 0, distance: 0 };
            //                 const newCars = [...prevCars];
            //                 newCars[index] = stoppedCar;
            //                 return newCars;
            //             }
            //             return prevCars;
            //         });
            //     });
        }));
    };

    return { handleRaceCars };
};

export default useRaceCars;
