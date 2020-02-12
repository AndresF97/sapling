import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/ourNavbar/index";
import Container from "./components/Container/index";
import Jumbotron from "./components/Footer/Index";
import API from "./utils/API";

// Everything below will be called in other components
// import Button from "./components/Button/index";
// import Card from "./components/Card/index";
// import Columns from "./components/Columns/index";
// import Graph from "./components/Graph/index";
// import Rows from "./components/Rows/index";


function App() {

  API.searchProduct("ps4",1)
    .then(res =>{
      console.log(res.data);
    });
  return (
    <div>
      <Navbar/>
        <Container/>
      <Jumbotron/>
    </div>
  );
}





export default App;
