import React, { Component } from 'react';
import './App.css';
import MakeConferencePage from './components/conferenceForms/MakeConferencePage';
import Headers from './components/header/Header'
import Contact from './components/header/Contact'
import Faq from './components/header/Faq'
import About from './components/header/About'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import session from './components/session/session'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers  />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/makesession" component={MakeConferencePage} />
        <Route exact path="/session" component={session} />
      </div>
    );
  }
}

export default App;
