import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useAuth', () => ({
  useAuth: () => ({ user: null, token: null, loading: false, error: null, login: jest.fn(), register: jest.fn(), logout: jest.fn(), refreshProfile: jest.fn() })
}));

jest.mock('./router/AppRouter', () => () => <div>Welcome to PCN</div>);

test('renders PCN welcome message', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to PCN/i);
  expect(heading).toBeInTheDocument();
});
