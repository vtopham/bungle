//If you're going to touch this code, check with the other person!! for the love of god!!
import React, {useState} from 'react';
import './App.css';
import {Route} from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Restaurant from "./Components/Restaurant"
import Results from "./Components/Results"


function App() {

  const [location, setLocation] = useState("Los-Vegas-NV");
  const [restaurantID, setRestaurantID] = useState("800");
  console.log(restaurantID);

  

  return (
    <>
    <Route exact path = "/">
      <Home location = {location} setLocation = {setLocation}/>
    </Route>

    <Route path = "/about">
      <About />
    </Route>

  <Route exact path = "/:location"> {/*I figured we could have the alias include the state for future functionality*/}
      <Results location = {location} setLocation = {setLocation} restaurantID = {restaurantID} setRestaurantID = {setRestaurantID}/>
    </Route>

    <Route path = "/:location/:restaurantID"> {/*I... think this works? lol*/}
      <Restaurant />
    </Route>
    </>
  );
}

export default App;
