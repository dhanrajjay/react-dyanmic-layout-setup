import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Locale from './index';

describe('Examining the Locale component of the library', () => {
  test("checks for the Locale component ", () => {
    let component = render(<Locale />);
    expect(component).not.toBeNull();
  });

  test('checks for the Locale component language tag value and change the locale', () => {
    let footerComponent = render(<Locale />);
    expect(footerComponent.getByText('Francias'));
    fireEvent.click(screen.getByText(/Francias/i));
    expect(footerComponent.getByText('English'));
  });
});