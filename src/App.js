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

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Router>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/Teams'>Teams</NavLink>
					<NavLink to='/Players'>Players</NavLink>

					<Switch>
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
