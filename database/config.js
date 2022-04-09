const mongoose = require("mongoose");
require("dotenv").config();

//mongodb://user:password@localhost:27017/nameDB?authSource=admin
// https://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/
//https://donwebayuda.com/tutorial-mongodb-creacion-de-base-de-datos-conexion-remota-y-securizacion/
// https://www.programmersought.com/article/82255377188/
const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}); /* en la version 6 ya no va , {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}*/
		console.log("DB Conectado");
	} catch (error) {
		console.log("hubo un error");
		console.log(error);
		process.exit(1);
	}
};

module.exports = { dbConnection };
