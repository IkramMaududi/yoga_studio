import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home-About/Home';
import About from './pages/Home-About/About';
import Register from './pages/Credentials/Register';
import Login from './pages/Credentials/Login';
import MonsterKiller from './pages/Games/MonsterKiller';
import JanKenPon from './pages/Games/JanKenPon';
import ShowProfile from './pages/Profile/ShowProfile';
import EditProfile from './pages/Profile/EditProfile';
import UploadArtWork from './pages/ArtWork/UploadArtWork';
import ShowArtWork from './pages/ArtWork/ShowArtWork';
import NotFound from './pages/NotFound/NotFound';
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
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/showprofile" component={ShowProfile} />
          <Route path="/monsterkiller" component={MonsterKiller} />
          <Route path="/jankenpon" component={JanKenPon} />
          <Route path="/uploadartwork" component={UploadArtWork} /> 
          <Route path="/showartwork" component={ShowArtWork} /> 
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;