function PlaceCard({ name }) {

  return (
    <div className="p-4 bg-white shadow rounded-lg hover:shadow-xl transition">

      <h4 className="font-semibold text-lg">
        {name}
      </h4>

    </div>
  );

}

export default PlaceCard;