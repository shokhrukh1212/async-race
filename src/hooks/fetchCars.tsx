import { Dispatch, SetStateAction, useEffect } from "react";
import { CarItemType } from "../types/interfaces";
import fetchApi from "../utils/api";

const useFetchCars = (setCars: Dispatch<SetStateAction<CarItemType[]>>) => {
    useEffect(() => {
        const fetchCars = async () => {
            const data = await fetchApi("GET", "garage") || [];
            const newData = data.map((d: CarItemType) => ({ ...d, distance: 0, duration: 0 }));
            setCars(newData);
        };

        fetchCars();
    }, []);
};

export default useFetchCars;
