import { render } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const hellowWorldElement = screen.getByText('Hello World', {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument;
  });
});
