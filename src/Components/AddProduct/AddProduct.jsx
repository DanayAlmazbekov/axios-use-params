import { Button, TextField } from "@mui/material";
import { Box, padding } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  // console.log(navigate);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    if (!title || !price || !image) {
      alert("Enter Fields!");
    } else {
      let newProduct = {
        title,
        price,
        image,
      };
      addProduct(newProduct);
      // console.log(newProduct);
      navigate("/");
    }
  }
  // console.log(title);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={title}
        label="Title"
        variant="outlined"
        onChange={e => setTitle(e.target.value)}
        style={{ backgroundColor: "white" }}
      />
      <TextField
        value={price}
        label="Price"
        variant="outlined"
        onChange={e => setPrice(e.target.value)}
        style={{
          backgroundColor: "white",
          marginTop: "9px",
        }}
      />
      <TextField
        value={image}
        label="Image"
        variant="outlined"
        onChange={e => setImage(e.target.value)}
        style={{ backgroundColor: "white", marginTop: "9px" }}
      />
      <Button
        onClick={() => handleSave()}
        sx={{ m: 1 }}
        variant="contained"
        style={{ borderRadius: "100px", backgroundColor: "green" }}>
        Save
      </Button>
    </Box>
  );
};

export default AddProduct;
