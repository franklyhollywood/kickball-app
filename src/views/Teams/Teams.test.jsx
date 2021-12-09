import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Teams from './Teams';

it('should render a list of teams', async () => {
	render(
		<MemoryRouter initialEntries={['/teams']}>
			<Switch>
				<Route exact path='/teams' component={Teams} />
			</Switch>
		</MemoryRouter>
	);

	screen.getByText('Any Second Now...', { exact: false });

	const teams = await screen.findByText('Bridge City Sneakers');

	expect(teams).toBeInTheDocument();
});
