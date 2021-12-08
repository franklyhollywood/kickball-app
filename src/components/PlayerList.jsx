import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPlayers } from '../services/players.js';

function PlayerList() {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPlayers()
			.then((res) => setPlayers(res))
			.then(() => setLoading(false));
	}, []);

	if (loading) {
		return <h1>Wait for it</h1>;
	}

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

export default PlayerList;
