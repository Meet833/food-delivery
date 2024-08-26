import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://meetsinghrajput833:RAJPUT2004****@cluster0.ihnp3se.mongodb.net/food-del').then(()=>console.log("DB connected"));
}