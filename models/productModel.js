import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String, //jo file hai vo  kya chiz hai, img or document so content type add karvo pde
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }  // jyare product create thai tyare add thai jai  te mate timestamps:true

);

export default mongoose.model("Products", productSchema);
