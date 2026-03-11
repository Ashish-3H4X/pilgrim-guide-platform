import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

function CityDetails() {

  const { id } = useParams();

  const [temples, setTemples] = useState([]);

  useEffect(() => {
    fetchTemples();
  }, []);

  const fetchTemples = async () => {

    const res = await API.get(`/temples?city=${id}`);

    setTemples(res.data.data);

  };

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6">
        Temples
      </h2>

      {temples.map((temple) => (

        <div
          key={temple._id}
          className="p-4 bg-white shadow rounded mb-3"
        >

          {temple.name}

        </div>

      ))}

    </div>

  );

}

export default CityDetails;