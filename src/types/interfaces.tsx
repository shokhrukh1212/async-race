import { Dispatch, SetStateAction, ReactNode } from "react";

export interface CarItemType {
    name: string,
    color: string,
    id: number
};

export interface CarItemProps {
    item: CarItemType,
};

export interface CarColor {
    color: string
};

export interface Row {
    id: number;
    car: string;
    name: string;
    wins: number;
    best_time: number;
};

export interface Pagination {
    pageSize: number,
    page: number
};

export interface CarContextInterface {
    cars: CarItemType[],
    chosenCar: CarItemType,
    setChosenCar: Dispatch<SetStateAction<CarItemType>>,
    setCars: Dispatch<SetStateAction<CarItemType[]>>,
};

export interface CreateContextProviderProps {
    children: ReactNode;
};
