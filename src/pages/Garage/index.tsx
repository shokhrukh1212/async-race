import "./style.css";
import RaceContentHeader from "../../components/RaceContentHeader";
import RaceContent from "../../components/RaceContent";
import PaginationComponent from "../../components/Pagination";

const Garage = () => {
    return (
        <>
            <RaceContentHeader />
            <RaceContent />
            <PaginationComponent />
        </>
    );
};

export default Garage;
