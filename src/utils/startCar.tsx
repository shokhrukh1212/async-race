import { CarItemType } from "../types/interfaces";
import fetchApi from "./api";

const startCarItem = async (
  item: CarItemType,
  width: number,
  currentCars: CarItemType[],
  setCurrentCars: (updateFunction: (prevCars: CarItemType[]) => CarItemType[]) => void,
) => {
  try {
    const index = currentCars.findIndex((car) => car.id === item.id);
    const data = await fetchApi("PATCH", `engine?id=${item.id}&status=started`);
    if (data) {
      const distance = width - 280;
      const duration = (distance / (data.velocity * 10)) * 5;
      setCurrentCars((prevCars: CarItemType[]) => {
        const newCars = [...prevCars];
        newCars[index] = { ...item, distance, duration };
        return newCars;
      });

      const data2 = await fetchApi(
        "PATCH",
        `engine?id=${item.id}&status=drive`,
      );
      if (data2 === null) {
        setCurrentCars((prevCars) => {
          const newCars2 = [...prevCars];
          newCars2[index] = { ...item, duration: 0, distance: 0 };
          return newCars2;
        });
      } else {
        return { id: item.id, duration };
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

export default startCarItem;
