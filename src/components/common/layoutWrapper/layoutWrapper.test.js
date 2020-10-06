import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LayoutWrapper from './index';
import { LayoutConfig } from '../../../utils/layoutConfig';
import { Translation } from 'react-i18next';
import * as i18n from '../../../i18n';

describe('Examining the Layout Wrapper component of the library', () => {

    global.fetch = jest.fn().mockImplementation((url) => {
        switch(url) {
            case "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people":
                return Promise.resolve({
                   json: (() => {
                    return Promise.resolve({ results: [{
                            name: "Luke Skywalker"
                        }, {
                           name: "C-3PO"
                       }]
                     })
                   }),
                })
        }
    });

    beforeEach(() => {
      fetch.mockClear();
    });

  test("checks for the Layout Wrapper tag ", () => {
    const layoutComponent = render(<LayoutWrapper value="submit" payload={{}} config={{}} handleChange={() => {}} />);
    expect(layoutComponent).not.toBeNull();
    expect(layoutComponent.getByText('Empty config has been passed.'));
  });

  test("checks for the Layout Wrapper with a select tag ", () => {
    const payload = {
      totalSqrFoot: '',
      percentBasement: '',
      ageOfRoof: '',
      describeHome: '',
      ageOfDwelling: '50',
      year: '2020',
      month: 'July',
      day: '27',
      haveBurningStove: 'No',
      haveOilTank: 'Yes',
      mortgagesCount: '1'
    };
    const config = [
        {
            layoutType: 'Row',
            children: [{
                layoutType: "Column",
                children: [{
                    input: "select",
                    label: "Age of Dwelling (0-99)",
                    name: "ageOfDwelling",
                    localeKey: "dwelling",
                    list: [30, 40, 50]
                }]
            }]
        }
    ]

    const { container } = render(<LayoutWrapper value="submit" payload={payload} config={config} handleChange={() => {}} />);
    expect(container).not.toBeNull();
    const labelCtrl = container.querySelector('label');
    expect(labelCtrl.innerHTML).toBe('Age of Dwelling (0-99)');
    expect(labelCtrl.htmlFor).toContain('ageOfDwelling');
  });

  test("checks for the Layout Wrapper with a select tag ", () => {
      const payload = {
        totalSqrFoot: '',
        percentBasement: '',
        ageOfRoof: '',
        describeHome: '',
        ageOfDwelling: '50',
        year: '2020',
        month: 'July',
        day: '27',
        haveBurningStove: 'No',
        haveOilTank: 'Yes',
        mortgagesCount: '1'
      };

      const { container } = render(<LayoutWrapper value="submit" payload={payload} config={LayoutConfig.children} handleChange={() => {}} />);
      expect(container).not.toBeNull();
      const labelCtrl = container.querySelector('label');
      expect(labelCtrl.innerHTML).toBe('Age of Dwelling (0-99)');
      expect(labelCtrl.htmlFor).toContain('ageOfDwelling');
      const percentTextInput = screen.getByRole('textbox', {name: /Percentage of Basement/i})
      fireEvent.change(percentTextInput, { target: { value: ' ' } });
      const errorEle = screen.getByText('This field is required');
      expect(errorEle).toBeDefined();
      fireEvent.change(percentTextInput, { target: { value: 'aa' } });
      const sqrFTextInput = screen.getByRole('textbox', {name: /Total Square Footage/i})
      fireEvent.change(sqrFTextInput, { target: { value: ' ' } });
      const reqEle = screen.getByText('This field is required');
      expect(reqEle).toBeDefined();
  });

});