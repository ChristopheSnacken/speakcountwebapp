import React, { Component } from 'react';
import './App.css';
import './Containing.css';
import MakeConferencePage from './components/conferenceForms/MakeConferencePage';
import Headers from './components/header/Header'
import Contact from './components/header/Contact'
import Faq from './components/header/Faq'
import About from './components/header/About'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Session from './components/session/Session'
import StartPage from './components/session/StartPage'
import SessionsList from './components/session/SessionsList'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Containing">
          <Headers  />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/createsession" component={MakeConferencePage} />
          <Route exact path="/sessions" component={SessionsList} />
          <Route exact path="/sessions/:id" component={Session} />
          <Route exact path="/start" component={StartPage} />
          <Route exact path="/" render={ () => <Redirect to="/start" /> } />
        </div>
      </div>
    );
  }
}

export default App;
