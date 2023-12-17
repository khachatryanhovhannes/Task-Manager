import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonField } from '../../../../components/atoms';
import '@testing-library/jest-dom';


describe('ButtonField component', () => {
  it('renders the button with the provided text', () => {
    render(
      <ButtonField
        type="button"
        fontSize="16px"
        fontWeight="bold"
        border="1px solid #000"
        bg="#ccc"
        cursor="pointer"
        onClick={() => {}}
        text="Click me"
      />
    );
    

    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('font-size: 16px');
    expect(button).toHaveStyle('font-weight: bold');
    expect(button).toHaveStyle('border: 1px solid #000');
    expect(button).toHaveStyle('background-color: #ccc');
    expect(button).toHaveStyle('cursor: pointer');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();

    render(
      <ButtonField
        type="button"
        fontSize="16px"
        fontWeight="bold"
        border="1px solid #000"
        bg="#ccc"
        cursor="pointer"
        onClick={onClickMock}
        text="Click me"
      />
    );

    const button = screen.getByRole('button', { name: 'Click me' });

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies hover background color when hovered', () => {
    render(
      <ButtonField
        type="button"
        fontSize="16px"
        fontWeight="bold"
        border="1px solid #000"
        bg="#ccc"
        hoverBackground="#ddd"
        cursor="pointer"
        onClick={() => {}}
        text="Click me"
      />
    );

    const button = screen.getByRole('button', { name: 'Click me' });

    fireEvent.mouseEnter(button);

    expect(button).toHaveStyle('background-color: #ddd');
  });
});
