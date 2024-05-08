import { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";
import Header from "./pages/Header";
import { CarContext } from "./context/CarContext";
import useFetchCars from "./hooks/fetchCars";

const App = () => {
  const { cars, setCurrentCars, currentPage, setCars } = useContext(CarContext);

    useFetchCars(setCars);

    useEffect(() => {
      const visibleCars = cars.slice((currentPage - 1) * 7, currentPage * 7);
      setCurrentCars(visibleCars);
  }, [cars, currentPage]);

    return (
      <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Garage />} />
              <Route path="/winners" element={<Winners />} />
            </Routes>
      </div>
    );
};

export default App;
