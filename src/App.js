import Header from "./Components/Header/Header";
import Pokemons from "./Components/Pokemons/Pokemons";
import Pokemons2 from "./Components/Pokemons2/Pokemons2";
import RickAndMorty from "./Components/RickAndMorty/RickAndMorty";
import AddProduct from "./Components/AddProduct/AddProduct";
import Users from "./Components/Users/Users";
import "./App.css";
import { Paper, Rating } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import List from "./Components/List/List";
import { useState } from "react";
import Edit from "./Components/Edit/Edit";

function App() {
  //! CRUD - Create Read Update Delete
  //! Create - POST запрос

  const API = "http://localhost:8000/products";

  //! для хранения данных
  const [products, setProducts] = useState([]);

  //! Create - POST

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  //! READ - GET
  async function getProducts() {
    let res = await axios(API);
    setProducts(res.data);
    // console.log("from app.js", res);
  }
  // console.log(products);

  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах */}
      <Header />
      {/* для перечисления роутов */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route
          path="/"
          element={<List products={products} getProducts={getProducts} />}
        />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons2" element={<Pokemons2 />} />
        <Route path="rickandmorty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Pokemons2 />
    //   <Rating />
    //   <Paper />
    //   <Pokemons />
    //   <RickAndMorty />
    //   <Users />
    // </div>
  );
}

export default App;
