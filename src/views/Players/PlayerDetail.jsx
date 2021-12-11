import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

export default function PlayerDetail() {
	const [player, setPlayer] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		getPlayerById(id)
			.then((res) => setPlayer(res))
			.then(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <h1>Any Second Now...</h1>;
	}

	return (
		<div>
			<Link to={`/players/${player.id}`} className='App-link'>
				{player.name}
			</Link>
			<p>{player.name}</p>
			<p>{player.position}</p>
			<p>{player.teams.name}</p>
		</div>
	);
}
