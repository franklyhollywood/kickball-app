import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../services/teams';

export default function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTeams = async () => {
    getTeams()
      .then((res) => setTeams(res))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    loadTeams();
  }, []);

  // const history = useHistory();
  const handleDelete = async ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
      try {
        await deleteTeamById(id);
        await loadTeams();
      } catch (err) {
        if (err.code === '23503') {
          alert('You need to delete the players first...');
        }
      }
    } else {
      return;
    }

    if (shouldDelete) {
      await deleteTeamById(id);
      await loadTeams();
    }
  };

  if (loading) {
    return <h1>Any Second Now...</h1>;
  }

  return (
    <>
      <h1>Teams:</h1>
      <Link to="/teams/new" className="App-link">
        <button type="button">Add a team</button>
      </Link>

      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
              <Link to={`/teams/edit/${team.id}`} className="App-link">
                <button type="button">Edit team</button>
              </Link>
              <button type="button" onClick={() => handleDelete({ id: team.id, name: team.name })}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
