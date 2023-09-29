const formElementInputs = [
  {
    label: "Team's Name",
    name: "teamName",
    type: "text",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Project Topic",
    name: "projectTopic",
    type: "text",
  },
];

const formElementSelects = [
  {
    label: "Category",
    name: "category",
    options: [
      {
        value: "Web Development",
      },
      {
        value: "mobile development",
      },
      {
        value: "data science",
      },
    ],
  },

  {
    label: "Group Size",
    name: "groupSize",
    options: [
      {
        value: "1-2",
      },
      {
        value: "3-5",
      },
      {
        value: "6-10",
      },
      {
        value: "More than 10",
      },
    ],
  },
];

export { formElementInputs, formElementSelects };
