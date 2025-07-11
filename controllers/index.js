const mongoDB = require("../models");

async function buildGetAllContactsView(req, res) {
  const contacts = await mongoDB.getAllContacts();

  res.send(contacts);
}

async function buildGetOneContactView(req, res) {
  const contact = await mongoDB.getOneContact(req, res);

  res.send(contact);
}

async function buildAddContactView(req, res) {
  const contact = await mongoDB.createNewContact(req, res);

  res.send(contact);
}

async function buildEditContactView(req, res) {
  const contact = await mongoDB.editContact(req, res);

  res.send(contact);
}

async function buildDeleteContactView(req, res) {
  const contact = await mongoDB.deleteContact(req, res);

  res.send(contact);
}

module.exports = {
  buildGetAllContactsView,
  buildGetOneContactView,
  buildAddContactView,
  buildEditContactView,
  buildDeleteContactView,
};
