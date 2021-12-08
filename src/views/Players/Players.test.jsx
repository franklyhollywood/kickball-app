import { render, screen } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Players from './Players';

it('should render a detailed view of an individual player', async () => {
	render(
		<MemoryRouter initialEntries={['/players']}>
			<Switch>
				<Route exact path='/players' component={Players} />
			</Switch>
		</MemoryRouter>
	);

	screen.getByText('Any Second Now...', { exact: false });

	const players = await screen.findByText('Ben E. Jetts');

	expect(players).toBeInTheDocument();
});
//tested awesome
//TESTED AWESOME!!
