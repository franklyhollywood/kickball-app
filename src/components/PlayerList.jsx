import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getPlayers, deletePlayerById } from '../services/players.js';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const loadPlayers = async () => {
    getPlayers()
      .then((res) => setPlayers(res))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

  if (loading) {
    return <h1>Any Second Now...</h1>;
  }

  return (
    <>
      <h1>Players:</h1>
      <Link to="/players/new" className="App-link">
        <button type="button">Add a player</button>
      </Link>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
              <Link to={`/players/edit/${player.id}`} className="App-link">
                <button type="button">Edit player</button>
              </Link>
              <button
                type="button"
                onClick={() => handleDelete({ id: player.id, name: player.name })}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
