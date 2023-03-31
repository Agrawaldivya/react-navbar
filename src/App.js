import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import About from './pages/About';
import Certificates from './pages/Certificates';
import Education from './pages/Education';
import Home from './pages/home';

function App() {
	return (
		<Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/certificates" exact>
          <Certificates/>
        </Route>
        <Route path="/education" exact>
          <Education/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
	);
}

export default App;
