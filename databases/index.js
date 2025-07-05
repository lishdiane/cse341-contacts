const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();

async function connectToMongoDB() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        return client;

    } catch (error) {
        console.log(error);
    }
}

async function getAllContacts() {
    const client = await connectToMongoDB();

    const collection = await client.db('CSE341').collection('contact').find();
    const contacts = await collection.toArray();

    return contacts;
} 

async function getOneContact(req, res) {
    const client = await connectToMongoDB();
    const userId = new ObjectId(req.params._id);
    console.log(typeof userId)
    console.log(userId);

    const contact = await client.db("CSE341").collection("contact").findOne({ _id: userId });

  return contact;
} 

module.exports = {connectToMongoDB, getAllContacts, getOneContact};