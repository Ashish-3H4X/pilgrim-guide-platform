import mongoose from "mongoose";

const StaySchema = new mongoose.Schema(
  {
    name: String,

    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City"
    },

    type: {
      type: String
    },

    price: String,

    location: {
      lat: Number,
      lng: Number
    }
  },
  {
    timestamps: true
  }
);

const Stay = mongoose.model("Stay", StaySchema);

export default Stay;