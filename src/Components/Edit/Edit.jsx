import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Edit = ({ getOneContact, oneContact, updateContact }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  function handleSave() {
    let editedContact = {
      name,
      lastname,
      number,
    };
    updateContact(params.id, editedContact);
    navigate("/");
    console.log(editedContact);
  }
  useEffect(() => {
    getOneContact(params.id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastname(oneContact.lastname);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

  return (
    <Container>
      {oneContact ? (
        <Box
          marginTop={"50px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ backgroundColor: "white" }}
            label="Name"
            variant="filled"
          />
          <TextField
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            style={{ backgroundColor: "white" }}
            label="Lastname"
            variant="filled"
          />
          <TextField
            value={number}
            onChange={e => setNumber(e.target.value)}
            style={{ backgroundColor: "white" }}
            label="Number"
            variant="filled"
          />
          <Button
            style={{
              marginTop: "10px",
              borderRadius: "20px",
              backgroundColor: "green",
            }}
            onClick={() => handleSave()}
            variant="contained">
            Save
          </Button>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
