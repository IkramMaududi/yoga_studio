import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Game from './pages/Game/Game';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/register" component={Register} /> 
          <Route path="/login" component={Login} /> 
          <Route path="/profile" component={Profile} />
          <Route path="/game" component={Game} /> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;