import { Rating } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./card.css";

const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character/";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Rick and Morty</h2>
      <div className="list">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>name: {item.name}</h4>
            <img src={item.image} alt="" />
            <br />
            <Rating name="simple-controlled" />
            <br />
            <div>Status: {item.status}</div>
            <div>Species: {item.species}</div>
            <div>Gender: {item.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
