import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import Wobble from '../node_modules/react-reveal/Wobble';
import Roll from '../node_modules/react-reveal/Roll';

function App() {

  return (
    <div>
      <Roll>
      <Wobble>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
      </Wobble>
      </Roll>
    </div>
  );
}

export default App;
