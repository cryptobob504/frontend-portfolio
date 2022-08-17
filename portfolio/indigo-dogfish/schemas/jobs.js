export default {
  name: 'job',
  type: 'document',
  title: 'Job',
  fields: [
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'month_year',
      type: 'string',
      title: 'Month/Year',
    },
    {
      title: 'Accomplishments',
      name: 'accomplishments',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
