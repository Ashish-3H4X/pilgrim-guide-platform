import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

function CityDetails() {

  const { id } = useParams();

  const [temples, setTemples] = useState([]);
  const [places, setPlaces] = useState([]);
  const [stays, setStays] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchTemples();
    fetchPlaces();
    fetchStays();
    fetchFoods();
  }, []);

  const fetchTemples = async () => {
    const res = await API.get(`/temples?city=${id}`);
    setTemples(res.data.data);
  };

  const fetchPlaces = async () => {
    const res = await API.get(`/places?city=${id}`);
    setPlaces(res.data.data);
  };

  const fetchStays = async () => {
    const res = await API.get(`/stays?city=${id}`);
    setStays(res.data.data);
  };

  const fetchFoods = async () => {
    const res = await API.get(`/foods?city=${id}`);
    setFoods(res.data.data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6">
        City Guide
      </h2>

      {/* Temples */}
      <h3 className="text-2xl font-semibold mt-6 mb-4">
        Temples
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {temples.map((temple) => (
          <div
            key={temple._id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition"
          >
            <h4 className="font-semibold text-lg">
              {temple.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Places */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">
        Famous Places
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map((place) => (
          <div
            key={place._id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition"
          >
            <h4 className="font-semibold text-lg">
              {place.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Stay */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">
        Stay Options
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stays.map((stay) => (
          <div
            key={stay._id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition"
          >
            <h4 className="font-semibold text-lg">
              {stay.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Food */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">
        Food / Bhandara
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food._id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition"
          >
            <h4 className="font-semibold text-lg">
              {food.name}
            </h4>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CityDetails;

