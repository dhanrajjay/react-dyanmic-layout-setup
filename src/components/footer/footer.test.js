import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './index';

describe('Examining the Footer component of the library', () => {
  test("checks for the Footer component ", () => {
    let component = render(<Footer />);
    expect(component).not.toBeNull();
  });

  test('checks for the Footer component language tag value', () => {
    let footerComponent = render(<Footer />);
    expect(footerComponent.getByText('Francias'));
  });

  test('checks for the Footer component language tag value and change the locale', () => {
    let footerComponent = render(<Footer />);
    expect(footerComponent.getByText('Francias'));
    fireEvent.click(screen.getByText(/Francias/i));
    expect(footerComponent.getByText('English'));
  });
});