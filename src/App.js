import React, { useEffect,useContext } from "react";
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
import OrderConfirmation from "./components/Pages/OrderConfirmation";
import Admin from "./components/Pages/Admin";
import AdminOrder from "./components/Pages/AdminOrder";
import AdminProduct from "./components/Pages/AdminProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/address/:id" component={ChangeAddressPage} />
        <Route path="/create-address" component={CreateAddressPage} />
        <Route path="/user" component={UserInfoPage} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/order-confirmation" component={OrderConfirmation} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin-order/:id" component={AdminOrder} />
        <Route path="/admin-product/:id" component={AdminProduct} />

        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
