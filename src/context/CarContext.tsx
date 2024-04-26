import { createContext, useState, useMemo } from "react";
import { CarItemType, CarContextInterface, CreateContextProviderProps } from "../types/interfaces";

const initialState = {
  id: 0,
  name: "",
  color: "",
};

const CarContext = createContext<CarContextInterface>({
    cars: [],
    chosenCar: initialState,
    setChosenCar: () => {},
    setCars: () => {},
});

const CarContextProvider = ({ children }: CreateContextProviderProps) => {
    const [cars, setCars] = useState<CarItemType[]>([]);
    const [chosenCar, setChosenCar] = useState<CarItemType>(initialState);

    const contextValue = useMemo(
    () => (
      { cars, chosenCar, setChosenCar, setCars }),
      [cars, chosenCar, setChosenCar, setCars],
    );

    return (
      <CarContext.Provider value={contextValue}>
        {children}
      </CarContext.Provider>
    );
  };

export { CarContext, CarContextProvider };
