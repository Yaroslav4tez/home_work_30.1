import React from "react";
import { Routes, Route } from "react-router-dom";

import Swapi from "./swapi/swapi.jsx";
import Todo from "./todoList";


const App = () => (
    <div>
        <Swapi/>
        <Todo/>   
    </div>
);

export default App;