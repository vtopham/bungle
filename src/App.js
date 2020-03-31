//If you're going to touch this code, check with the other person!! for the love of god!!
import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Restaurant from "./Components/Restaurant";
import Results from "./Components/Results";
import Footer from "./Components/Footer";

function App() {
  const [location, setLocation] = useState("Los-Vegas-NV"); //should be city-state with kabob casing
  const [restaurantID, setRestaurantID] = useState("800"); //this will be the number that zomato uses
  console.log(restaurantID);

  return (
    <>
      <Header />
      <Route exact path="/">
        <Home location={location} setLocation={setLocation} />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/search/:location">
        {" "}
        {/*matches up with state*/}
        <Results
          location={location}
          setLocation={setLocation}
          restaurantID={restaurantID}
          setRestaurantID={setRestaurantID}
        />
      </Route>

      <Route path="/seacrch/:location/:restaurantID">
        <Restaurant />
      </Route>
      <Footer />
    </>
  );
}

export default App;
