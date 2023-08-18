import mongoose from "mongoose";
const DBConnection = async() => {
    try{
        if(process.env.DATABASE_URI){
            await mongoose.connect(process.env.DATABASE_URI)
        }
        
    }catch(err){
        console.log(err);
    }
}

export default DBConnection