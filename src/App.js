import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./components/Pages/RegisterPage";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import CategoryPage from "./components/Pages/CategoryPage";
import CartPage from "./components/Pages/CartPage";
import ChangeAdressPage from "./components/Pages/ChangeAdressPage";
import UserInfoPage from "./components/Pages/UserInfoPage";
import PageNotFound from "./components/Pages/ErrorPages/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        {/* TODO: make /product/:id (same with categry, cart ...) */}
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/adress" component={ChangeAdressPage} />
        {/* Needs to be authenticated route */}
        <Route path="/user" component={UserInfoPage} />
        {/* <Route path="/category" component={CategoryPage} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
