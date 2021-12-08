import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
		return <h1> Wait For It </h1>;
	}

	return (
		<div>
			<p>{player.name}</p>
			<p>{player.position}</p>
			<p>{player.teams.name}</p>
		</div>
	);
}
