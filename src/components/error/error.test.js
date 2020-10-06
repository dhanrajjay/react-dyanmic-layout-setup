import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from './index';

describe('Examining the Error Boundary component of the library', () => {
    function DummyComponent({generateError}) {
      if (generateError) {
        throw new Error('Error')
      } else {
        return null
      }
    }

   beforeAll(() => {
     jest.spyOn(console, 'error').mockImplementation(() => {});
   })

   afterAll(() => {
     console.error.mockRestore();
   })

  test("checks for the Error Boundary component with and without error", () => {
    const componentDidCatch =  jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    const {rerender} = render(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>
    );
    expect(console.error).not.toHaveBeenCalled();

    rerender(
      <ErrorBoundary>
        <DummyComponent generateError={true} />
      </ErrorBoundary>,
    )

    const wentWrongEle = screen.getByText('Something went wrong');
    expect(wentWrongEle).toBeDefined();
    expect(console.error).toHaveBeenCalledTimes(2);
    expect(componentDidCatch).toHaveBeenCalled();
  });
});