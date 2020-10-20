import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Nav from './components/Nav/nav';
// import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Portfolio from './pages/Portfolio/portfolio';
import Services from "./pages/Services/services";
import Contact from './pages/Contact/contact';

const App = () => {
  return (
    <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
};

export default App;
