import { useEffect, useState } from "react";
import API from "../api/api";

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
          <div
            key={city._id}
            className="p-4 bg-white shadow rounded-lg"
          >
            <h3 className="text-xl font-semibold">
              {city.name}
            </h3>
            <p className="text-gray-500">
              {city.state}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default CitiesPage;