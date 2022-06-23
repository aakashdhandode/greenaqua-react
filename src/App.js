
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './view/Home';
import About from './view/About';
import Services from './view/Services';
import Service from './view/Service';
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
       
          <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About} />
              <Route path="/Clients" component={Clients} />
              <Route path="/Gallery" component={Gallery} />
              <Route exact path="/categories" component={Products} />
              <Route exact path="/services" component={Service} />
              <Route exact path="/category/:id"  component={ProductsCategories} />
              <Route path="/details/:id" component={Details} />
              <Route path="/Downloads" component={Downloads} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Careers" component={Careers} />
              <Route path="/ApplyJob" component={ApplyJob} />
            </Switch>
            <Footer />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;