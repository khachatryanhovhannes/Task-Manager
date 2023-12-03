import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { LanguageChangeButton } from '../../../../components/atoms';
import { useTranslation } from 'react-i18next';


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
    },
  }),
}));

test('renders LanguageChangeButton with English flag initially', () => {
  const { getByRole } = render(<LanguageChangeButton />);
  const image = getByRole('img');
  expect(image).toHaveAttribute('src', 'englishFlag.png');
});

test('changes language on button click', () => {
  const { getByRole } = render(<LanguageChangeButton />);
  const image = getByRole('img');

  fireEvent.click(image);

  expect((useTranslation as jest.Mock).mock.calls[0][0].i18n.changeLanguage).toHaveBeenCalledTimes(1);
  
  expect((useTranslation as jest.Mock).mock.calls[0][0].i18n.changeLanguage).toHaveBeenCalledWith('hy');
});

