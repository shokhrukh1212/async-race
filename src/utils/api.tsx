import baseUrl from "../constants";

const fetchApi = async (method: string, endpoint: string, body?: Object) => {
    const url: string = `${baseUrl}/${endpoint}`;
    const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

    try {
        const res = await fetch(url, options);
    } catch (error: unknown) {
        if(error instanceof Error)
            console.log(error.message);
    }
};
