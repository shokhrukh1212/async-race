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

export interface TableDataProps {
    rows: WinnerCarType[]
}

export interface CarIconProps {
    color: string,
    distance?: number,
    duration?: number
};

export interface Pagination {
    pageSize: number,
    page: number
};

export interface CarContextInterface {
    cars: CarItemType[],
    chosenCar: CarItemType,
    winners: WinnerCarType[],
    currentPage: number,
    currentCars: CarItemType[],
    isDisabled: boolean,
    setChosenCar: Dispatch<SetStateAction<CarItemType>>,
    setCars: Dispatch<SetStateAction<CarItemType[]>>,
    setCurrentPage: Dispatch<SetStateAction<number>>
    setCurrentCars: Dispatch<SetStateAction<CarItemType[]>>
    setIsDisabled: Dispatch<SetStateAction<boolean>>
    setWinners: Dispatch<SetStateAction<WinnerCarType[]>>,
};

export interface CreateContextProviderProps {
    children: ReactNode;
};

export interface CarDriveData {
    velocity: number,
    distance: number
};

export interface WinnerType {
    id: number,
    wins: number,
    time: number
};

export interface WinnerCarType extends WinnerType {
    color: string,
    name: string,
    isVisible: boolean,
};

export interface WinnerModal {
    isVisible: boolean,
    name: string,
    time: number,
};

export interface ModalData {
    car: string,
    time: number,
};

export interface ModalComponentProps {
    data: ModalData,
    open: boolean,
    handleClose: () => void,
};
