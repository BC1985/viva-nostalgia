import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import CoffeeMenu from "./components/CoffeeMenu/CoffeeMenu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/menu" component={CoffeeMenu} />
          <Route path="/checkout" render={props => <Checkout {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
