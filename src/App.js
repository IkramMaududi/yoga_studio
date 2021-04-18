import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
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
				{/* <Navbar/> */}
				<Navbar1 />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/edit-profile" component={EditProfile} />
					<Route path="/show-profile" component={ShowProfile} />
					<Route path="/monster-killer" component={MonsterKiller} />
					<Route path="/jan-ken-pon" component={JanKenPon} />
					<Route path="/upload-artwork" component={UploadArtWork} />
					<Route path="/show-artwork" component={ShowArtWork} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;