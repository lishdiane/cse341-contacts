const mongoDB = require("../databases");
const { ObjectId } = require("mongodb");

async function getAllContacts() {
  const client = await mongoDB.connectToMongoDB();

  const collection = await client.db("CSE341").collection("contact").find();
  const contacts = await collection.toArray();

  return contacts;
}

async function getOneContact(req) {
  const client = await mongoDB.connectToMongoDB();
  const userId = new ObjectId(req.params._id);

  const contact = await client
    .db("CSE341")
    .collection("contact")
    .findOne({ _id: userId });

  return contact;
}

async function createNewContact(req, res) {
  const client = await mongoDB.connectToMongoDB();
  //const userId = new ObjectId(req.params._id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    color: req.body.color,
    birthday: req.body.birthday,
  };
  await client
    .db("CSE341")
    .collection("contact")
    .insertOne(contact, (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
      res.body.write(`Id: ${res.body._id}`);
    });
}

async function editContact(req) {
  const client = await mongoDB.connectToMongoDB();
  const userId = new ObjectId(req.params._id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    color: req.body.color,
    birthday: req.body.birthday,
  };
  await client
    .db("CSE341")
    .collection("contact")
    .replaceOne({ _id: userId }, contact, (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    });
}

async function deleteContact(req) {
  const client = await mongoDB.connectToMongoDB();
  const userId = new ObjectId(req.params._id);

  await client
    .db("CSE341")
    .collection("contact")
    .deleteOne({ _id: userId }, (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    });
}

module.exports = {
  getAllContacts,
  getOneContact,
  createNewContact,
  editContact,
  deleteContact,
};
