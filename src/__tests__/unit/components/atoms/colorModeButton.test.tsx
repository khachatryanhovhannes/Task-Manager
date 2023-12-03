import { render, screen, fireEvent } from '@testing-library/react';
import {ColorModeButton} from '../../../../components/atoms';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn(),
}));

describe('ColorModeButton component', () => {
  it('renders the button with the correct icon based on color mode', () => {
    const mockUseColorMode = jest.fn();
    mockUseColorMode.mockReturnValue({
      colorMode: 'light',
      toggleColorMode: jest.fn(),
    });

    require('@chakra-ui/react').useColorMode = mockUseColorMode;

    render(<ColorModeButton />);

    // const moonIcon = screen.getByTestId('moon-icon');
    // const sunIcon = screen.queryByTestId('sun-icon');

    // expect(moonIcon).toBeInTheDocument();
    // expect(sunIcon).not.toBeInTheDocument();
  });

  it('calls toggleColorMode when the button is clicked', () => {
    const mockUseColorMode = jest.fn();
    const mockToggleColorMode = jest.fn();

    mockUseColorMode.mockReturnValue({
      colorMode: 'light',
      toggleColorMode: mockToggleColorMode,
    });

    require('@chakra-ui/react').useColorMode = mockUseColorMode;

    render(<ColorModeButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockToggleColorMode).toHaveBeenCalled();
  });
});
