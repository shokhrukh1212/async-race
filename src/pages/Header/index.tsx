import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => {
    const navigate = useNavigate();

    const handleGoWinners = () => {
        navigate("/winners");
    };

    const handleGoGarage = () => {
        navigate("/");
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 3 }}>
                <Box>
                    <Button variant="contained" sx={{ mr: 2, fontSize: "1.5rem" }} className="button" onClick={handleGoGarage}>Garage</Button>
                    <Button variant="contained" sx={{ fontSize: "1.5rem" }} className="button" onClick={handleGoWinners}>Winners</Button>
                </Box>

                <Box>
                    <h1>Async Race</h1>
                </Box>
        </Box>
    );
};

export default Header;
