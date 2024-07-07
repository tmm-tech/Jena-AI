// src/App.js
import React from 'react';
import TaskList from './Components/TaskList';
import { Route, Routes } from "react-router-dom";

const App = () => (
  <Routes>
            <Route path="/" exact component={TaskList} />
       
 </Routes>
);

export default App;
