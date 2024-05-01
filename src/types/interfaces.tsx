import { Dispatch, SetStateAction, ReactNode } from "react";

export interface CarItemType {
    name: string,
    color: string,
    id: number,
    distance: number,
    duration: number
};

export interface CarItemProps {
    item: CarItemType
};

export interface CarIconProps {
    color: string,
    distance: number,
    duration: number
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
    currentPage: number,
    currentCars: CarItemType[],
    setChosenCar: Dispatch<SetStateAction<CarItemType>>,
    setCars: Dispatch<SetStateAction<CarItemType[]>>,
    setCurrentPage: Dispatch<SetStateAction<number>>
    setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>
};

export interface CreateContextProviderProps {
    children: ReactNode;
};

export interface CarDriveData {
    velocity: number,
    distance: number
};