import { createContext, useState, useMemo } from "react";
import { CarItemType, CarContextInterface, CreateContextProviderProps } from "../types/interfaces";

const initialState = {
    cars: [{ id: 0, name: "", color: "" }],
    setCars: () => {},
};

const CarContext = createContext<CarContextInterface>(initialState);

const CarContextProvider = ({ children }: CreateContextProviderProps) => {
    const [cars, setCars] = useState<CarItemType[]>([]);

    const contextValue = useMemo(() => ({ cars, setCars }), [cars, setCars]);

    return (
      <CarContext.Provider value={contextValue}>
        {children}
      </CarContext.Provider>
    );
  };

export { CarContext, CarContextProvider };
