import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a detailed view of an individual team', async () => {
	render(
		<MemoryRouter initialEntries={['/teams/10']}>
			<Switch>
				<Route exact path='/teams/:id' component={TeamDetail} />
			</Switch>
		</MemoryRouter>
	);

	screen.getByText('Any Second Now...', { exact: false });

	const teamName = await screen.findByText('Acme USA');

	expect(teamName).toBeInTheDocument();
});
