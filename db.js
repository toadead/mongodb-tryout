const mongoose = require("mongoose");

const USER = 'andrew';
const PWD = 'Acxiom01';
const DB_NAME = 'AndrewDB';
const DEVICE_COLLECTION = 'Devices';

const uri = `mongodb+srv://${USER}:${PWD}@andrewcluster-mk959.mongodb.net/${DB_NAME}`;

mongoose.connect(uri, {useNewUrlParser: true}).then(
	() => {
		console.log("Connected to Mongo DB");
	},
	err => {
		console.log("Error connecting Database instance due to: ", err);
	}
);

/*
const MongoClient = require('mongodb').MongoClient;

let client = null;

(async () => {
	const uri = `mongodb+srv://${USER}:${PWD}@andrewcluster-mk959.mongodb.net/test?retryWrites=true`;
	client = await MongoClient.connect(uri, {useNewUrlParser: true});
	let db = client.db(DB_NAME);
	await db.createCollection('Employee');
	let colls = await db.listCollections();
	colls.forEach(coll => {
		console.log(coll.name);
	});
	console.log(await db.collection(DEVICE_COLLECTION).find().toArray());
	client.close();
})().catch(err => {
	console.error(err);
	if (client) client.close();
});
*/
