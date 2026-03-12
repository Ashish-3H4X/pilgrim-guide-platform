import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlaceCard from "../components/PlaceCard";
import CityMap from "../components/CityMap";
import API from "../api/api";

function CityDetails() {

  const { id } = useParams();

  const [city, setCity] = useState(null);
  const [temples, setTemples] = useState([]);
  const [places, setPlaces] = useState([]);
  const [stays, setStays] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadData = async () => {
      await fetchCity();
      await fetchTemples();
      await fetchPlaces();
      await fetchStays();
      await fetchFoods();

      setLoading(false);
    };

    loadData();

  }, []);

  const fetchCity = async () => {
    const res = await API.get("/cities");
    const selectedCity = res.data.data.find((c) => c._id === id);
    setCity(selectedCity);
  };

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

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">
        Loading city guide...
      </div>
    );
  }

  return (

    <div className="max-w-6xl mx-auto p-6">

      {/* City Title */}
      <h2 className="text-3xl font-bold mb-6">
        {city ? `${city.name} Guide` : "City Guide"}
      </h2>

<CityMap />

      {/* City Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-7">

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm">Temples</p>
          <p className="text-2xl font-bold">{temples.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm">Places</p>
          <p className="text-2xl font-bold">{places.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm">Stay</p>
          <p className="text-2xl font-bold">{stays.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm">Food</p>
          <p className="text-2xl font-bold">{foods.length}</p>
        </div>

      </div>

      {/* Temples */}
      <h3 className="text-2xl font-semibold mt-6 mb-4">Temples</h3>

      {temples.length === 0 ? (
        <p className="text-gray-500">No temples available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {temples.map((temple) => (
             <PlaceCard key={temple._id} name={temple.name} />
          ))}
        </div>
      )}

      {/* Places */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Famous Places</h3>

      {places.length === 0 ? (
        <p className="text-gray-500">No places available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place) => (
           <PlaceCard key={place._id} name={place.name} />
          ))}
        </div>
      )}

      {/* Stay */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Stay Options</h3>

      {stays.length === 0 ? (
        <p className="text-gray-500">No stay options available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stays.map((stay) => (
            <PlaceCard key={stay._id} name={stay.name} />
          ))}
        </div>
      )}

      {/* Food */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Food / Bhandara</h3>

      {foods.length === 0 ? (
        <p className="text-gray-500">No food locations available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foods.map((food) => (
            <PlaceCard key={food._id} name={food.name} />
          ))}
        </div>
      )}

    </div>
  );
}

export default CityDetails;
