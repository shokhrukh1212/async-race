import { useContext } from "react";
import WinnersTable from "../../components/WinnersTable";
import { CarContext } from "../../context/CarContext";
import useFetchWinners from "../../hooks/fetchWinners";

const Winners = () => {
  const { winners, setWinners } = useContext(CarContext);

    useFetchWinners(setWinners);

  return (
      <WinnersTable rows={winners} />
  );
};

export default Winners;
