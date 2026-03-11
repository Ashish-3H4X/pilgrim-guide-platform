import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    name: String,

    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City"
    },

    type: String,

    timing: String,

    location: {
      lat: Number,
      lng: Number
    }
  },
  {
    timestamps: true
  }
);

const Food = mongoose.model("Food", FoodSchema);

export default Food;