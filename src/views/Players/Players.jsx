import PlayerList from '../../components/PlayerList.jsx';
import React, { useState, useEffect } from 'react';
import { getPlayers } from '../../services/players.js';

export default function Players() {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPlayers()
			.then((res) => setPlayers(res))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <h1>Any Second Now...</h1>;
	}
	return (
		<div>
			<PlayerList players={players} />
		</div>
	);
}
