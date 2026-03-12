import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CitiesPage from "./pages/CitiesPage.jsx";
import CityDetails from "./pages/CityDetails";

function App() {

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <Routes>

        <Route path="/" element={<CitiesPage />} />

        <Route path="/city/:id" element={<CityDetails />} />

      </Routes>

    </div>
  );

}

export default App;