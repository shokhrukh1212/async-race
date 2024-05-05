import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

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
                    <Link to="/">Garage</Link>
                    <Link to="/winners">Winners</Link>
                    {/* <Button variant="contained" sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" }, mr: { xs: 1, sm: 2, md: 3 } }} className="button" onClick={handleGoGarage}>Garage</Button>
                    <Button variant="contained" sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem" } }} className="button" onClick={handleGoWinners}>Winners</Button> */}
                </Box>

                <Box>
                    <h1>Async Race</h1>
                </Box>
        </Box>
    );
};

export default Header;
