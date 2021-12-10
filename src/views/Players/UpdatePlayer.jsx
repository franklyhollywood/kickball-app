import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPlayerById, updatePlayerById } from '../../services/players.js';

export default function UpdatePlayer() {
	const [isLoading, setIsLoading] = useState(true);
	const [player, setPlayer] = useState(null);
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	// const [playerState, setPlayerState] = useState('');
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const grabPlayer = async () => {
			const response = await getPlayerById(id);
			setPlayer(response);
			setName(response.name);
			setPosition(response.position);
			setIsLoading(false);
		};
		grabPlayer();
	}, [id]);

	const handlePlayerUpdate = async (e) => {
		e.preventDefault();
		const updatePlayer = await updatePlayerById(id, {
			name,
			position,
		});

		setPlayer(updatePlayer);
		history.push(`/players/${updatePlayer[0].id}`);
	};

	if (isLoading) return <h1>Loading....</h1>;

	return (
		<div>
			<h4>{player.name}</h4>

			<fieldset>
				<legend>Update Player Info</legend>
				<form onSubmit={handlePlayerUpdate}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						defaultValue={player.name}
						onChange={(e) => setName(e.target.value)}
					></input>
					<label htmlFor='position'>Position:</label>
					<input
						type='text'
						id='position'
						name='position'
						defaultValue={player.position}
						onChange={(e) => setPosition(e.target.value)}
					></input>

					<input type='submit' value='Edit Player' />
				</form>
			</fieldset>
		</div>
	);
}
