import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import { createPlayer } from '../../services/players';

export default function AddPlayers() {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [teamId, setTeamId] = useState('');
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const resp = await createPlayer({ name, position, teamId });
		history.push(`/players/${resp[0].id}`);
	};

	return (
		<>
			<fieldset>
				<legend>Add A Player</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name:</label>
					<input
						id='name'
						name='name'
						type='text'
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor='city'>Position:</label>
					<input
						id='position'
						name='position'
						type='text'
						value={position}
						onChange={({ target }) => setPosition(target.value)}
					/>

					<label htmlFor='teamId'>Team:</label>
					<input
						id='teamId'
						name='teamId'
						type='text'
						value={teamId}
						onChange={({ target }) => setTeamId(target.value)}
					/>

					<input type='submit' value='Add Player' />
				</form>
			</fieldset>
		</>
	);
}
