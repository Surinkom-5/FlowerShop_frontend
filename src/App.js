import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./components/Pages/RegisterPage";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import CategoryPage from "./components/Pages/CategoryPage";
import CartPage from "./components/Pages/CartPage";
import ChangeAddressPage from "./components/Pages/ChangeAddressPage";
import CreateAddressPage from "./components/Pages/CreateAddressPage";
import UserInfoPage from "./components/Pages/UserInfoPage";
import PageNotFound from "./components/Pages/ErrorPages/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GetCategories, GetProducts, GetUser, GetCart } from "./services";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetProducts(dispatch);
    GetCategories(dispatch);
    GetUser(dispatch)
    GetCart(dispatch)
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/address" component={ChangeAddressPage} />
        <Route path="/create-address" component={CreateAddressPage} />
        {/* Needs to be authenticated route */}
        <Route path="/user" component={UserInfoPage} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
