
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './view/Home';
import About from './view/About';
import Services from './view/Services';
import Gallery from './view/Gallery';
import Contact from './view/Contact';
import Clients from './view/Clients';
import Downloads from './view/Downloads';
import Products from './view/Products';
import ProductsCategories from './view/ProductsCategories';
import Details from './view/Details';
import Careers from './view/Careers';
import ApplyJob from './components/ApplyJob';


class App extends Component {
  render() {
    return (
      <div>
       
          <Router basename="aqua">
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About} />
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Clients" component={Clients} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/Products" component={Products} />
              <Route exact path="/Products/:id"  component={ProductsCategories} />
              <Route exact path="/Details/:id" component={Details} />
              <Route exact path="/Downloads" component={Downloads} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Careers" component={Careers} />
              <Route exact path="/ApplyJob" component={ApplyJob} />
            </Switch>
            <Footer />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;