import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {}, //adress ne obj kari didho, vadhu line ma lakhishu and text area no use karishu to vadhu formating re ena lidhe direct strig ma save nai thai
      required: true,
    },
    answer: {
      // forget password handle karva
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
); // new user create thashe etle teno created time add thai jashe

export default mongoose.model("users", userSchema);
