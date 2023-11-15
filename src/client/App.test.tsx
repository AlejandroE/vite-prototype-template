import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import WrappedApp, { App } from './App';

describe('App', () => {
  it('renders Home', () => {
    render(<WrappedApp />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Vite + React'
    );
  });

  it('renders NotFound', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not found'
    );
  });
});
