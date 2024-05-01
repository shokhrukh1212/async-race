import { createContext, useState, useMemo } from "react";
import { CarItemType, CarContextInterface, CreateContextProviderProps } from "../types/interfaces";

const initialState = {
  id: 0,
  name: "",
  color: "",
  distance: 0,
  duration: 0,
};

const CarContext = createContext<CarContextInterface>({
    cars: [],
    chosenCar: initialState,
    currentPage: 1,
    currentCars: [],
    setChosenCar: () => {},
    setCars: () => {},
    setCurrentPage: () => {},
    setCurrentCars: () => {},
});

const CarContextProvider = ({ children }: CreateContextProviderProps) => {
    const [cars, setCars] = useState<CarItemType[]>([]);
    const [chosenCar, setChosenCar] = useState<CarItemType>(initialState);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentCars, setCurrentCars] = useState<CarItemType[]>([]);

    const contextValue = useMemo(
    () => (
      {
        cars,
        chosenCar,
        currentPage,
        currentCars,
        setChosenCar,
        setCars,
        setCurrentPage,
        setCurrentCars,
      }),
      [
        cars,
        chosenCar,
        currentPage,
        currentCars,
        setChosenCar,
        setCars,
        setCurrentPage,
        setCurrentCars],
    );

    return (
      <CarContext.Provider value={contextValue}>
        {children}
      </CarContext.Provider>
    );
  };

export { CarContext, CarContextProvider };
