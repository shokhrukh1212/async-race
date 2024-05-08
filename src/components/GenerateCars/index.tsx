import { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CarContext } from "../../context/CarContext";
import fetchApi from "../../utils/api";
import generateCarItem from "../../utils/generateCars";

const GenerateCars = () => {
    const { cars, setCars } = useContext(CarContext);

    const handleGenerate = async () => {
        try {
            const newCars = [];
            for (let i = 0; i < 100; i += 1) {
                const res = fetchApi("POST", "garage", generateCarItem());
                if (res) newCars.push(res);
            }

            const data = await Promise.all(newCars);
            setCars([...cars, ...data]);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    return (
        <Box>
            <Button variant="outlined" sx={{ fontSize: { xs: "0.5rem", sm: "0.7rem", md: "1rem" }, mr: { xs: 1, sm: 2, md: 3 } }} onClick={handleGenerate}>Generate Cars</Button>
        </Box>
    );
};

export default GenerateCars;
