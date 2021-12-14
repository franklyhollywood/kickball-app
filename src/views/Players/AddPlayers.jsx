import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams.js';

export default function AddPlayers() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  const loadTeams = async () => {
    getTeams().then((res) => setTeams(res));
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await createPlayer({ name, position, teamId });
    history.push(`/players/${resp[0].id}`);
  };

  function assignTeamHandler(e) {
    setTeamId(e.target.value);
  }

  return (
    <>
      <fieldset>
        <legend>Add A Player</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />

          <label htmlFor="city">Position:</label>
          <input
            id="position"
            name="position"
            type="text"
            value={position}
            onChange={({ target }) => setPosition(target.value)}
          />

          <label>Team:</label>
          <select value={teamId} onChange={assignTeamHandler}>
            {teams.map((team) => {
              return (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              );
            })}
          </select>

          <input type="submit" value="Add Player" />
        </form>
      </fieldset>
    </>
  );
}
