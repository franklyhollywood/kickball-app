import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
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
            </li>
          );
        })}
      </ul>
    </>
  );
}
