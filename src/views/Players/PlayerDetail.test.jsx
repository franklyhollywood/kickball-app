import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render a detailed view of an individual player', async () => {
	render(
		<MemoryRouter initialEntries={['/players/1']}>
			<Switch>
				<Route exact path='/players/:id' component={PlayerDetail} />
			</Switch>
		</MemoryRouter>
	);

	screen.getByText('Any Second Now...', { exact: false });

	const playerName = await screen.findByText('Ben E. Jetts');

	expect(playerName).toBeInTheDocument();
});
