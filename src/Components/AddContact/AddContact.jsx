import { Button, TextField } from "@mui/material";
import { Box, padding } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const navigate = useNavigate();
  // console.log(navigate);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  function handleSave() {
    if (!name || !lastname || !number) {
      alert("Enter Fields!");
    } else {
      let newContact = {
        name,
        lastname,
        number,
      };
      addContact(newContact);

      navigate("/");
    }
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={name}
        label="name"
        variant="outlined"
        onChange={e => setName(e.target.value)}
        style={{ backgroundColor: "white" }}
      />
      <TextField
        value={lastname}
        label="lastname"
        variant="outlined"
        onChange={e => setLastname(e.target.value)}
        style={{
          backgroundColor: "white",
          marginTop: "9px",
        }}
      />
      <TextField
        value={number}
        label="number"
        variant="outlined"
        onChange={e => setNumber(e.target.value)}
        style={{ backgroundColor: "white", marginTop: "9px" }}
      />
      <Button
        onClick={() => handleSave()}
        sx={{ m: 1 }}
        variant="contained"
        style={{
          borderRadius: "100px",
          backgroundColor: "green",
        }}>
        Save
      </Button>
    </Box>
  );
};

export default AddContact;
