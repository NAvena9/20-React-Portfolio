import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//my reusable react components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NoMatch from './pages/NoMatch';
import Projects from './pages/Projects';
//style componentes
import './App.css';
import 'react-typist/dist/Typist.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path="/20-React-Portfolio" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;