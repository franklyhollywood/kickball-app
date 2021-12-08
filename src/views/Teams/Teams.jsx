import TeamList from '../../components/TeamList';
import React, { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams.js';

export default function Teams() {
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTeams()
			.then((res) => setTeams(res))
			.then(() => setLoading(false));
	}, []);
	if (loading) {
		return <h1>Wait for it</h1>;
	}
	return (
		<div>
			<TeamList teams={teams} />
		</div>
	);
}
