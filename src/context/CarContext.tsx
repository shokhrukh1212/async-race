import { createContext, useState, useMemo } from "react";
import { CarItemType, CarContextInterface, CreateContextProviderProps, WinnerModal, WinnerCarType } from "../types/interfaces";

export const initialState = {
  id: 0,
  name: "",
  color: "#000000",
  distance: 0,
  duration: 0,
};

const CarContext = createContext<CarContextInterface>({
    cars: [],
    chosenCar: initialState,
    currentPage: 1,
    currentCars: [],
    isDisabled: false,
    winners: [],
    hasWinner: false,
    setChosenCar: () => {},
    setCars: () => {},
    setCurrentPage: () => {},
    setCurrentCars: () => {},
    setIsDisabled: () => {},
    setWinners: () => {},
    setHasWinner: () => {},
});

const CarContextProvider = ({ children }: CreateContextProviderProps) => {
    const [cars, setCars] = useState<CarItemType[]>([]);
    const [chosenCar, setChosenCar] = useState<CarItemType>(initialState);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentCars, setCurrentCars] = useState<CarItemType[]>([]);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [winners, setWinners] = useState<WinnerCarType[]>([]);
    const [hasWinner, setHasWinner] = useState<boolean>(false);
    const contextValue = useMemo(
    () => ({ cars, chosenCar, currentPage, currentCars, isDisabled, winners, hasWinner, setChosenCar, setCars, setCurrentPage, setCurrentCars, setIsDisabled, setWinners, setHasWinner }),
      [
        cars,
        chosenCar,
        currentPage,
        currentCars,
        isDisabled,
        winners,
        hasWinner],
    );

    return (
      <CarContext.Provider value={contextValue}>
        {children}
      </CarContext.Provider>
    );
  };

export { CarContext, CarContextProvider };
