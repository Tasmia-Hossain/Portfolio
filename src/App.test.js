import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  expect(screen.getAllByText(/Tasmia Hossain/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Lost and Found Hub/i)).toBeInTheDocument();
  expect(screen.getByText(/Download CV/i)).toBeInTheDocument();
});
