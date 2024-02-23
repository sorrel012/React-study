import Async from './Async';
import { render } from '@testing-library/react';

describe('Async component', () => {
  test('renders posts if request succeeds', () => {
    render(<Async />);
  });
});
