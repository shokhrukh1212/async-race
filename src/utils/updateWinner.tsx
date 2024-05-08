import fetchApi from "./api";

const updateWinner = async (id: number, wins: number, time: number) => {
    try {
        const body = { wins, time };
        const res = await fetchApi("PUT", `winners/${id}`, body);
        if (!res) return null;
        return res;
    } catch (error) {
        if (error instanceof Error) return error.message;
    }

    return null;
};

export default updateWinner;
