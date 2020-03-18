import React from "react";
import { Router, Route, HashRouter } from "react-router-dom";
import history from "./History";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import Product_description_page from "./Pages/Product_description_page";

import { CartProvider } from "./Pages/CartContext";
const Routing = () => {
  return (
    <CartProvider>
      <HashRouter>
        <Structure />
      </HashRouter>
    </CartProvider>
  );
};

const Structure = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

const Main = () => {
  history.listen(_ => {
    window.scrollTo(0, 0);
  });
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Men" component={Men} />
        <Route path="/Women" component={Women} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Cart" component={Cart} />
        <Route
          path="/Product_description_page/:id"
          component={Product_description_page}
        />
      </div>
    </Router>
  );
};

export default Routing;
