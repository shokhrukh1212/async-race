import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const UpdateCar = () => {
    const [value, setValue] = useState("fff");

    return (
        <Box>
            <TextField id="outlined-basic" size="small" label="Car Brand" variant="outlined" sx={{ mr: 1 }} />
            <input type="color" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button variant="outlined" sx={{ mr: 2, fontSize: "1rem" }}>Update</Button>
        </Box>
);
};

export default UpdateCar;
