import mongoose from "mongoose";

const TempleSchema  = new mongoose.Schema ({
    name:{
      type:String,
      require:true
    },
    city:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"City"
    },
  
    description : String,
    openingTime : String,
    closingTime :String,

    location: {
      lat: Number,
      lng: Number
    },
},
{
timestamps: true
}
)

const Temple = mongoose.model("Temple" , TempleSchema)
export default Temple