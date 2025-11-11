import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import STORE from './redux/store';
import App from './App';

test('renders search input', () => {
  render(
    <Provider store={STORE}>
      <App />
    </Provider>
  );
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});
