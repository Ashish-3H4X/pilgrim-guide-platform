import { Link } from "react-router-dom";

<Link to={`/city/${city._id}`} key={city._id}>

  <div className="p-4 bg-white shadow rounded-lg hover:shadow-lg">

    <h3 className="text-xl font-semibold">
      {city.name}
    </h3>

    <p className="text-gray-500">
      {city.state}
    </p>

  </div>

</Link>