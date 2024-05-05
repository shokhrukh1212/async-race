import { useContext } from "react";
import WinnersTable from "../../components/WinnersTable";
import { CarContext } from "../../context/CarContext";

const Winners = () => {
  const { winners } = useContext(CarContext);
  console.log("Winners - ", winners);

  return (
      <WinnersTable rows={winners} />
  );
};

export default Winners;
