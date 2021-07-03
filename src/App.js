
import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './CheckOut/CheckOut';
import Orders from "./components/Orders/Orders";
import { createContext } from 'react';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
 
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
        <p>Name: {loggedInUser.name}</p>
      
  
      <Router>
         <Header/>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Product">
            <Product/>
          </Route>

          <Route path="/AddProduct">
         <AddProduct></AddProduct>
          </Route>

          <Route path="/CheckOut">
        <CheckOut></CheckOut>
          </Route>


         
          <PrivateRoute path="/Orders/:id">
          <Orders></Orders>
          </PrivateRoute>
         
          
          <Route exact path="/">
              <Home />
            </Route>
          
        </Switch>

    </Router>

    </UserContext.Provider>
  );
}

export default App;
