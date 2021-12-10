import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home.jsx';
import Players from './views/Players/Players.jsx';
import PlayerDetail from './views/Players/PlayerDetail.jsx';
import Teams from './views/Teams/Teams.jsx';
import TeamDetail from './views/Teams/TeamDetail.jsx';
import AddTeams from './views/Teams/AddTeams.jsx';
import AddPlayers from './views/Players/AddPlayers.jsx';
import UpdateTeams from './views/Teams/UpdateTeams.jsx';
import UpdatePlayer from './views/Players/UpdatePlayer.jsx';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Router>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/teams'>Teams</NavLink>
					<NavLink to='/players'>Players</NavLink>

					<Switch>
						<Route exact path='/teams/new' component={AddTeams} />
						<Route exact path='/players/edit/:id' component={UpdatePlayer} />
						<Route exact path='/teams/edit/:id' component={UpdateTeams} />
						<Route exact path='/players/new' component={AddPlayers} />
						<Route exact path='/' component={Home} />
						<Route exact path='/teams' component={Teams} />
						<Route exact path='/teams/:id' component={TeamDetail} />
						<Route exact path='/players' component={Players} />
						<Route exact path='/players/:id' component={PlayerDetail} />
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
