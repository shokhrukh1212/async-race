import { Dispatch, SetStateAction, useEffect } from "react";
import fetchApi from "../utils/api";
import { WinnerCarType, WinnerType } from "../types/interfaces";

const useFetchWinners = (
        setWinners: Dispatch<SetStateAction<WinnerCarType[]>>,
    ) => {
    useEffect(() => {
        const fetchWinners = async () => {
            const data = await fetchApi("GET", "winners");
            if (!data) return;
            const winnersPromise = Promise.all(
                data.map(async (car: WinnerType): Promise<WinnerCarType | null> => {
                try {
                    const { id, wins, time } = car;
                    const carByID = await fetchApi("GET", `garage/${car.id}`);
                    const { name, color } = carByID;
                    return { isVisible: false, id, color, name, wins, time };
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        console.log(error.message);
                    }
                    return null;
                }
            }),
        );

            const winners = await winnersPromise;
            setWinners(winners);
        };

        fetchWinners();
    }, []);
};

export default useFetchWinners;
