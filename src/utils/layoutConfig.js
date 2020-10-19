import {Validator} from 'rv-react-test/Utils/Validator';
import i18n from "../i18n";

export const LayoutConfig = {
  children: [
    {
      layoutType: "Row",
      children: [
        {
            layoutType: "Column",
            children: [
              {
                input: "select",
                label: "Describe Your Home",
                name: "describeYourHome",
                localeKey: "describeYourHome",
                list: [],
                url: ''
              },
              {
                input: "select",
                label: "Age of Dwelling (0-99)",
                name: "ageOfDwelling",
                localeKey: "dwelling",
                list: [{value: 30, label: 'general.thirty'},
                       {value: 40, label: 'general.forty'},
                       {value: 50, label: 'general.fifty' }]
              },
              {
                input: "date-selection",
                year: '',
                month: '',
                day: '',
                label: "Date Moved into Home",
                name: "dateMovedInto",
                localeKey: "dateMovedInto"
              },
              {
                input: "select",
                label: "Age of Home's Roof",
                name: "ageOfRoof",
                localeKey: "ageOfRoof",
                list: [{value: 20, label: '20'},
                       {value: 25, label: '25'},
                       {value: 26, label: '26' },
                       {value: 29, label: '29' }]
              },
              {
                 input: "text",
                 label: "Total Square Footage of Home, Excluding Basement (800 MIN)",
                 name: "totalSqrFoot",
                 localeKey: "totalSquareFoot",
                 placeholder: "Enter the Total Square Foot",
                 validators: [{
                     check: Validator.required,
                     message: 'This field is required'
                 }, {
                    check: Validator.isMinimum,
                    message: 'This field must be longer than two characters'
                 }]
              },
              {
                 input: "text",
                 label: "Percentage of Basement is Finished (Approximate)",
                 name: "percentBasement",
                 localeKey: "percentBasement",
                 placeholder: "Enter the Basement Finished Percentage",
                 validators: [{
                    check: Validator.required,
                    message: 'This field is required'
                 }]
              }
            ]
        },
        {
           layoutType: "Column",
           children: [
             {
               input: "btn-group",
               label: "Do you have oil tank?",
               name: "haveOilTank",
               list: [{label: 'general.yes', value: 'Yes'}, {label: 'general.no', value: 'No'}],
               localeKey: "haveOilTank"
             },
             {
               input: "btn-group",
               label: "Does your home have a wood burning stove",
               name: "haveBurningStove",
               localeKey: "haveBurningStove",
               list: [{label:'Yes', value: 'Yes'}, {label: 'No', value: 'No'}]
             },
             {
               input: "btn-group",
               label: "How many mortgages do you have?",
               name: "mortgagesCount",
               localeKey: "mortgagesCount",
               list: [{label: '0', value: '0'}, {label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3+', value: '3+'}]
             },
             {
               input: "select",
               label: "Distance to Closet Fire Hydrant",
               list: [{value: "301 metres (987 feet) or more", label: "301 metres (987 feet) or more"},
                      {value: "1301 metres (987 feet) or more", label: "1301 metres (987 feet) or more"}],
               name: "closetFireHydrant",
               localeKey: "closetFireHydrant"
             },
             {
               input: "select",
               label: "Distance to Closet Fire State",
               list: [{value: "More than 22 km (13 miles)", label: "More than 22 km (13 miles)"},
                      {value: "1. More than 22 km (13 miles)", label: "1. More than 22 km (13 miles)"}],
               name: "closetFireState",
               localeKey: "closetFireState"
             },
             {
               input: "select",
               label: "Google.com",
               name: "google",
               localeKey: "closetFireState",
               url: 'https://www.google.com'
             },
             {
               input: "select",
               label: "Another Dropdown",
               name: "anotherDropdown",
               localeKey: "closetFireState",
               url: 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people'
             }
           ]
         }
      ]
    },
  ]
}