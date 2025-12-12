import { Provider } from 'react-redux';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

// Utility store setup
function setupStore(initialValue = 0) {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    preloadedState: {
      counter: {
        value: initialValue
      }
    }
  });
}

function renderWithStore(initialValue = 0) {
  const store = setupStore(initialValue);

  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// -------------------------------
// TEST CASES
// -------------------------------

// Basic render test
test('renders counter heading', () => {
  renderWithStore(0);
  expect(screen.getByText(/Counter Value:/i)).toBeInTheDocument();
});

// Initial value test
test('render initial counter value', () => {
  renderWithStore(0);
  expect(screen.getByText(/Counter Value: 0/i)).toBeInTheDocument();
});

test('increment value on button click', () => {
  renderWithStore(0);
  fireEvent.click(screen.getByText(/Inc \+/i));   // fixed
  expect(screen.getByText(/Counter Value: 1/i)).toBeInTheDocument();
});

test('decrement value on button click', () => {
  renderWithStore(5);
  fireEvent.click(screen.getByText(/Dec -/i));    // fixed
  expect(screen.getByText(/Counter Value: 4/i)).toBeInTheDocument();
});

// Reset test
test('reset value on button click', () => {
  renderWithStore(5);
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText(/Counter Value: 0/i)).toBeInTheDocument();
});

// Increment by amount test
test('increment value by typed amount', () => {
  renderWithStore(10);

  const input = screen.getByPlaceholderText('enter a amount');
  fireEvent.change(input, { target: { value: '7' } });

  fireEvent.click(screen.getByText('Inc by amount'));
  expect(screen.getByText(/Counter Value: 17/i)).toBeInTheDocument();
});
