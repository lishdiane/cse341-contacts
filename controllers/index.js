const mongoDB = require("../databases");

async function buildGetAllContactsView(req, res) {
  const contacts = await mongoDB.getAllContacts();
  console.log(contacts);
  res.send(contacts);
}

async function buildGetOneContactView(req, res) {
  const contact = await mongoDB.getOneContact(req, res);
  console.log(contact);
  res.send(contact);
}

module.exports = { buildGetAllContactsView, buildGetOneContactView };
