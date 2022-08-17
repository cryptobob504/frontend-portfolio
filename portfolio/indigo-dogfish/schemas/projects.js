export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'githublink',
      type: 'url',
      title: 'Github Link',
    },
    {
      name: 'externallink',
      type: 'url',
      title: 'External Link',
      required: 'false',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      required: 'false',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
    {
      title: 'Frameworks',
      name: 'frameworks',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
