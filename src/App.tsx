import { Routes, Route } from "react-router-dom";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";
import Header from "./pages/Header";
import "./App.css";
import { CarContextProvider } from "./context/CarContext";

const App = () => {
    return (
      <div className="App">
        <CarContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Garage />} />
            <Route path="/winners" element={<Winners />} />
          </Routes>
        </CarContextProvider>
      </div>
    );
};

export default App;
