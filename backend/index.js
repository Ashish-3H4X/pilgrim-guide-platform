import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cityRoutes from "./src/routes/cityRoutes.js"
import templeRoutes from "./src/routes/templeRoutes.js";
import placeRoutes from "./src/routes/placeRoutes.js";
import foodRoutes from "./src/routes/foodRoutes.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Pilgrim Guide API is running"
  });
});

 //  ALL  ROUTES HERE 

app.use("/api/cities", cityRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/foods" ,  foodRoutes )


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();