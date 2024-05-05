import "./App.css";
import { Routes, Route } from "react-router-dom";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";
import Header from "./pages/Header";

const App = () => {
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
