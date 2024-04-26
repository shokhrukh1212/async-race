import { Dispatch, SetStateAction, useEffect } from "react";
import { CarItemType } from "../types/interfaces";
import fetchApi from "../utils/api";

const useFetchCars = (setCars: Dispatch<SetStateAction<CarItemType[]>>) => {
    useEffect(() => {
        const fetchCars = async () => {
            const data = await fetchApi("GET", "garage") || [];
            setCars(data);
        };

        fetchCars();
    }, []);
};

export default useFetchCars;
