import { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CarContext } from "../../context/CarContext";
import fetchApi from "../../utils/api";

const UpdateCar = () => {
    const [name, setName] = useState<string>("");
    const [color, setColor] = useState<string>("#000000");
    const { cars, setCars, chosenCar } = useContext(CarContext);

    useEffect(() => {
        setName(chosenCar.name);
        setColor(chosenCar.color);
    }, [chosenCar]);

    const handleUpdateCar = async () => {
        try {
            const body = { name, color };
            const newCar = await fetchApi("PUT", `garage/${chosenCar.id}`, body);
            if (newCar) {
                const updatedCars = cars.map((car) => {
                    if (car.id === chosenCar.id) return newCar;
                return car;
                });
                setCars(updatedCars);
                setName("");
                setColor("#000000");
            }
            return null;
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
            return null;
        }
    };

    return (
        <Box>
            <TextField id="outlined-basic" size="small" label="Car Brand" variant="outlined" sx={{ mr: 1 }} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }} disabled={!name} onClick={handleUpdateCar}>Update</Button>
        </Box>
);
};

export default UpdateCar;
