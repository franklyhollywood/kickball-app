import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import { createTeam } from '../../services/teams.js';

export default function AddTeams() {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const resp = await createTeam({ name, city, state });
		history.push(`/teams/${resp[0].id}`);
	};

	return (
		<>
			<fieldset>
				<legend>Add A Team</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor='city'>City</label>
					<input
						id='city'
						name='city'
						type='text'
						value={city}
						onChange={({ target }) => setCity(target.value)}
					/>

					<label htmlFor='state'>State</label>
					<input
						id='state'
						name='state'
						type='text'
						value={state}
						onChange={({ target }) => setState(target.value)}
					/>

					<input type='submit' value='Add Team' />
				</form>
			</fieldset>
		</>
	);
}
