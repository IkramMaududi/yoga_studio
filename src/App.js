import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home-About/Home';
import About from './pages/Home-About/About';
import ContactUs from './pages/Home-About/ContactUs';
import SignUp from './pages/Credentials/SignUp';
import SignIn from './pages/Credentials/SignIn';

import MonsterKiller from './pages/Games/MonsterKiller';
import JanKenPon from './pages/Games/JanKenPon';

import ShowProfile from './pages/Profile/ShowProfile';
import EditProfile from './pages/Profile/EditProfile';

import UploadArtWork from './pages/ArtWork/UploadArtWork';
import ShowArtWork from './pages/ArtWork/ShowArtWork';

import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contactus" component={ContactUs} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signin" component={SignIn} />
					<Route path="/editprofile" component={EditProfile} />
					<Route path="/showprofile" component={ShowProfile} />
					<Route path="/monsterkiller" component={MonsterKiller} />
					<Route path="/jankenpon" component={JanKenPon} />
					<Route path="/updateschedule" component={UploadArtWork} />
					<Route path="/showschedule" component={ShowArtWork} />
					<Route component={NotFound} />
				</Switch>
		</Router>
	);
};

export default App;