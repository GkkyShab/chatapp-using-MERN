// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// // const mongoURL = process.env.MONGO_DB_LOCAL;
// const mongoURL = process.env.MONGO_DB_URI;
// mongoose.connect(mongoURL);

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("Connected to MongoDB Server");
// });
// db.on("disconnected", () => {
//   console.log("Unable to connect to MongoDB Server");
// });
// db.on("error", (err) => {
//   console.error("Error: ", err);
// });

// export default db;



import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;