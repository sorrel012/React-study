import Async from './Async';
import { render, screen } from '@testing-library/react';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async />);

    const listItemElements = screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
