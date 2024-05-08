import "./style.css";
import RaceContentHeader from "../../components/RaceContentHeader";
import RaceContent from "../../components/RaceContent";
import PaginationComponent from "../../components/Pagination";
import WinnerModal from "../../components/WinnerModal";

const Garage = () => {
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
