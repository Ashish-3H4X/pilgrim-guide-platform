import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function CityMap({ temples }) {

  const defaultPosition = [27.5035, 77.6737];

  return (

    <div className="h-96 rounded-lg overflow-hidden mb-8">

      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {temples.map((temple) => (

          temple.location && (

            <Marker
              key={temple._id}
              position={[
                temple.location.lat,
                temple.location.lng
              ]}
            >

              <Popup>
                {temple.name}
              </Popup>

            </Marker>

          )

        ))}

      </MapContainer>

    </div>

  );

}

export default CityMap;

