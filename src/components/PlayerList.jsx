import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
	return (
		<>
			<h1>Players:</h1>
			<ul>
				{players.map((player) => {
					return (
						<li key={player.id}>
							<Link to={`/players/${player.id}`} className='App-link'>
								{player.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
