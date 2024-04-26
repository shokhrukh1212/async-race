import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import fetchApi from "../../utils/api";
import { CarContext } from "../../context/CarContext";

const CreateCar = () => {
    const [color, setColor] = useState("#000000");
    const [name, setName] = useState("");
    const { cars, setCars } = useContext(CarContext);

    const handleCreateCar = async () => {
        try {
            const body = {
                name,
                color,
            };
            const newCarData = await fetchApi("POST", "garage", body);
            if (newCarData) {
                setCars([...cars, newCarData]);
                setColor("#000000");
                setName("");
            }
            return null;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            return null;
        }
    };

    return (
        <Box>
                <TextField id="outlined-basic" size="small" label="Car Brand" variant="outlined" sx={{ mr: 1 }} value={name} onChange={(e) => setName(e.target.value)} />
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }} disabled={!name} onClick={handleCreateCar}>Create</Button>
        </Box>
    );
};

export default CreateCar;
