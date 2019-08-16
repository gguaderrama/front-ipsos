import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Admin from './components/admin'
import Empleado from './components/empleados';
import Tabla from './components/tabla'
import './styles/less/style.less';
import Backgrounds from '../src/assets/IPSOS_404.png';

const Routes  = () => {
  return(
    <Router>
    <Switch>
      <Route exact path='/'  render={(props) => <Login {...props} />} ></Route> 
      <Route exact path='/admin' render={(props) => <Admin {...props} />}></Route> 
      <Route exact path='/empleados' render={(props) => <Empleado {...props} />}></Route>
      <Route exact path='/tabla' render={(props) => <Tabla {...props} />}></Route>

      {/* <Route exact path='/admin' component={Admin}></Route>  */}
      <Route component={error_404} />
    </Switch>  
    </Router>
  )
}


const error_404 = () => {
  return (
    <div className="App">
      <div className="errors">
        <h1 className="error">ERROR PAGE NOT FOUND</h1>
      </div>
      <div className="contenedor">
      <div className="primer-numero">
        <h1>4</h1>
      </div>
        <img className="logo404" src={Backgrounds} alt=""/>
        <img className="logos404" src={Backgrounds} alt=""/>
        <div class='shape'></div>
        <div className="segundo-numero">
        <h1>4</h1>
        </div>
       
        
      </div>
      
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Routes;
