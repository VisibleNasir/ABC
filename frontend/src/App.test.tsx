import App from './App';
import { render, screen } from '@testing-library/react';
test('renders Something works!', () => {
  render(<App />);
  expect(screen.getByText(/Something works!/i)).toBeInTheDocument();
});
