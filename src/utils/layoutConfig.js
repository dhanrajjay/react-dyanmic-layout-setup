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
                list: ["Bi-Level Town House End Unit/Semi-detached", "Bi-Bi-Level Town House End Unit/Semi-detached"]
              },
              {
                input: "select",
                label: "Age of Dwelling (0-99)",
                name: "ageOfDwelling",
                localeKey: "dwelling",
                list: [30, 40, 50]
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
                list: [20, 25, 26, 29]
              },
              {
                 input: "text",
                 label: "Total Square Footage of Home, Excluding Basement (800 MIN)",
                 name: "totalSqrFoot",
                 localeKey: "totalSquareFoot",
                 placeholder: "Enter the Total Square Foot"
              },
              {
                 input: "text",
                 label: "Percentage of Basement is Finished (Approximate)",
                 name: "percentBasement",
                 localeKey: "percentBasement",
                 placeholder: "Enter the Basement Finished Percentage"
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
               list: ['Yes', 'No'],
               localeKey: "haveOilTank"
             },
             {
               input: "btn-group",
               label: "Does your home have a wood burning stove",
               name: "haveBurningStove",
               localeKey: "haveBurningStove",
               list: ['Yes', 'No']
             },
             {
               input: "btn-group",
               label: "How many mortgages do you have?",
               name: "mortgagesCount",
               localeKey: "mortgagesCount",
               list: ['0', '1', '2', '3+']
             },
             {
               input: "select",
               label: "Distance to Closet Fire Hydrant",
               list: ["301 metres (987 feet) or more", "1301 metres (987 feet) or more"],
               name: "closetFireHydrant",
               localeKey: "closetFireHydrant"
             },
             {
               input: "select",
               label: "Distance to Closet Fire State",
               list: ["More than 22 km (13 miles)", "1. More than 22 km (13 miles)"],
               name: "closetFireState",
               localeKey: "closetFireState"
             }
           ]
         }
      ]
    },
  ]
}