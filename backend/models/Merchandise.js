import mongoose from "mongoose";

const merchandiseSchema = new mongoose.Schema({
    _id: String,
    price: Number,
    rating: Number,
    description: String,
    quantity: Number,
    type: String,
    tag: String,
  });
  
  export const MerchandiseModel = mongoose.model("Merchandise", merchandiseSchema);
  