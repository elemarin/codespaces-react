import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const plusButton = screen.getByText('+');
  const minusButton = screen.getByText('-');
  expect(plusButton).toBeDefined();
  expect(minusButton).toBeDefined();
});
