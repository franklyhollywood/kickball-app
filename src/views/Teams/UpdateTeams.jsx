import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTeamById, updateTeamById } from '../../services/teams.js';

export default function UpdatePlayer() {
	const [isLoading, setIsLoading] = useState(true);
	const [team, setTeam] = useState(null);
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [playerState, setPlayerState] = useState('');
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const grabTeam = async () => {
			const response = await getTeamById(id);
			setTeam(response);
			setName(response.name);
			setCity(response.city);
			setPlayerState(response.playerState);
			setIsLoading(false);
		};
		grabTeam();
	}, [id]);

	const handleTeamUpdate = async (e) => {
		e.preventDefault();
		const updateTeam = await updateTeamById(id, { name, city, playerState });

		setTeam(updateTeam);
		history.push(`/teams/${updateTeam[0].id}`);
	};

	if (isLoading) return <h1>Loading....</h1>;

	return (
		<div>
			<h4>{team.name}</h4>
			<p>
				{team.city}, {team.state}
			</p>
			<fieldset>
				<legend>Update Team Info</legend>
				<form onSubmit={handleTeamUpdate}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						defaultValue={team.name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<label htmlFor='city'>City:</label>
					<input
						type='text'
						id='city'
						name='city'
						defaultValue={team.city}
						onChange={(e) => setCity(e.target.value)}
					></input>
					<label htmlFor='state'>State:</label>
					<input
						type='text'
						id='state'
						name='state'
						defaultValue={team.state}
						onChange={(e) => setPlayerState(e.target.value)}
					></input>

					<input type='submit' value='Edit Team' />
				</form>
			</fieldset>
		</div>
	);
}
