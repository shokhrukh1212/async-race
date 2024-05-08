import fetchApi from "./api";

const createWinner = async (id: number, wins: number, time: number) => {
    try {
        const body = { id, wins, time };
        const res = await fetchApi("POST", "winners", body);
        if (res) return res;
        return null;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }

    return null;
};

export default createWinner;
