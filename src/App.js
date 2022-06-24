import Header from "./Components/Header/Header";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import List from "./Components/List/List";
import { useState } from "react";
import Edit from "./Components/Edit/Edit";
import AddContact from "./Components/AddContact/AddContact";

function App() {
  //! CRUD
  //! Create - POST запрос

  const API = "http://localhost:8000/contacts";

  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  //! Create - POST

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  //! READ - GET
  async function getContacts() {
    let res = await axios(API);
    setContacts(res.data);
    // console.log("from app.js", res);
  }
  // console.log(products);

  //! DELETE
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //! Detailed request, edit - GET API/id
  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    // console.log(res.data);
    setOneContact(res.data);
  }

  //! Update
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }
  // console.log(oneProduct);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <List
              deleteContact={deleteContact}
              contacts={contacts}
              getContacts={getContacts}
            />
          }
        />

        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/edit/:id"
          element={
            <Edit
              oneContact={oneContact}
              getOneContact={getOneContact}
              updateContact={updateContact}
            />
          }
        />
      </Routes>

      <h1></h1>
    </BrowserRouter>
  );
}

export default App;
