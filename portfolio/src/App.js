import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import CustomNavBar from './components/CustomNavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavBar />
        <div id="page-body">
          <Switch>
            <Route path="/home/" component={Home} exact/>
            <Route path="/projects/" component={Projects} exact/>
            <Route path="/contact/" component={Contact} exact/>
            <Redirect from="/" to="/home" exact/>
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
