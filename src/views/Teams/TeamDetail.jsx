import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function PlayerDetail() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getTeamById(id)
      .then((res) => setTeam(res))
      .then(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h1> Any Second Now... </h1>;
  }

  return (
    <div>
      <p>{team.name}</p>
      <p>{team.city}</p>
      <p>{team.state}</p>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
              {player.position} - {player.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
