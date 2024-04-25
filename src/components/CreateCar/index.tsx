import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CreateCar = () => {
    const [colorValue, setColorValue] = useState("#000000");
    const [name, setName] = useState("");

    return (
        <Box>
                <TextField id="outlined-basic" size="small" label="Car Brand" variant="outlined" sx={{ mr: 1 }} value={name} onChange={(e) => setName(e.target.value)} />
                <input type="color" value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
                <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }}>Create</Button>
        </Box>
    );
};

export default CreateCar;
