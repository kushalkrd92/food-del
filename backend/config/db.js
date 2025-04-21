import mongoose from "mongoose";

export const connnectDB = async () => {
  await mongoose.connect('mongodb+srv://kushalkrd92:Kushal926@cluster0.meqeb.mongodb.net/food-del').then(() => console.log("DB Connected"));
}

