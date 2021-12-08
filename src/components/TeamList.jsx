import { Link } from 'react-router-dom';
import React from 'react';

export default function TeamList({ teams }) {
	return (
		<>
			<h1>Teams:</h1>
			<ul>
				{teams.map((team) => {
					return (
						<li key={team.id}>
							<Link to={`/teams/${team.id}`} className='App-link'>
								{team.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
