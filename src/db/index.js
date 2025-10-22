import mongoose from "mongoose"


const connectDb = async(url) => {
try {
    const dbInstance = await mongoose.connect(url)
    console.log(dbInstance , `DataBase Connection Succesfull`)
    
    return dbInstance
} catch (error) {

    console.log(`DataBase Connection Failed ${error}`)
}

}

export default connectDb