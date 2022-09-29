import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {  Routes, Route } from "react-router-dom";
//import { Route,Switch, HashRouter as Router } from 'react-router-dom'
//import Welcome from './Welcome';
import Dashboard  from './Dashboard';
import Bid  from './Bid';
import './App.css';
import Route from "./Route"
// function App() {
//   return (
//       {/* <Router>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}>
//           </Route>
//           <Route path="/bid" element={<Bid/>}>
//           </Route>
//         </Routes>
//       </Router> */}
      
//   );
// }
export default () => {
  return (
    <div className="ui container">
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/bid">
        <Bid />
      </Route>
      
    </div>
  )
}
//export default App;
