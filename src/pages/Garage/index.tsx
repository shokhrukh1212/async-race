import { useContext } from "react";
import "./style.css";
import RaceContentHeader from "../../components/RaceContentHeader";
import RaceContent from "../../components/RaceContent";
import PaginationComponent from "../../components/Pagination";
import { CarContext } from "../../context/CarContext";
import useFetchWinners from "../../hooks/fetchWinners";
import WinnerModal from "../../components/WinnerModal";

const Garage = () => {
    const { setWinners } = useContext(CarContext);

    useFetchWinners(setWinners);
    return (
        <>
            <RaceContentHeader />
            <RaceContent />
            <WinnerModal />
            <PaginationComponent />
        </>
    );
};

export default Garage;
