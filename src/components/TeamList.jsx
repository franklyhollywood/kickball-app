import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getTeams } from '../services/teams.js';

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
