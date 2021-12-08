import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Home is here./i);
	expect(linkElement).toBeInTheDocument();
});
//Try it again if I should even bother
