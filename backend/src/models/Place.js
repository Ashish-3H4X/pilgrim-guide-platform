import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  name :{
    type:String,
    require:true
  },
  city:{
    type : mongoose.Schema.Types.ObjectId,
    ref: "City"

  },
   type: {
      type: String
    },

 description: String,

    location: {
      lat: Number,
      lng: Number
    }
  },
  {
    timestamps: true
  }
)

const Place = mongoose.model("Place", PlaceSchema);

export default Place;