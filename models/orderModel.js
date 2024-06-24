import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,//aanathi relation build karishu, kisse so refrence aapi didho  
        ref: "Products", //refrence
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users", // aa refrence userModel mathi aavshe so users
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
