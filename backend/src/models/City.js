import mongoose from "mongoose"
  const citySchema = new mongoose.Schema =({

    name:{
      type :String,
      require:true
    },
    sate:{
      type:String,
      require:true
    },
    description:{
      type:String
    },
    image:{
    type:String
    }
  },
  {
   timestamps: true
  }
)
 const City = mongoose.model("City",citySchema)

 export default City