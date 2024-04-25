import { Dispatch, SetStateAction, useEffect } from "react";
import { CarItemType } from "../types/interfaces";
import baseUrl from "../constants";

const useFetchCars = (setCars: Dispatch<SetStateAction<CarItemType[]>>) => {
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await fetch(`${baseUrl}/garage`);
                const data = await res.json();
                setCars(data);
            } catch (error: unknown) {
               if (error instanceof Error) {
                console.log(error.message);
               }
            }
        };

        fetchCars();
    }, []);
};

export default useFetchCars;
