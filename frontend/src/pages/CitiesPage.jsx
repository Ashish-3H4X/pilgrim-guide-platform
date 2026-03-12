import { useEffect, useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

function CitiesPage() {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    const res = await API.get("/cities");
    setCities(res.data.data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6">
        Pilgrim Cities
      </h2>

      <div className="grid grid-cols-2 gap-4">

      {cities.map((city) => (
  <Link to={`/city/${city._id}`} key={city._id}>
    <div className="p-5 bg-white rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-100">

      <h3 className="text-xl font-semibold text-gray-800">
        {city.name}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {city.state}
      </p>

      <div className="mt-3 text-blue-600 text-sm font-medium">
        View Details →
      </div>

    </div>
  </Link>
))}

      </div>

    </div>
  );
}

export default CitiesPage;