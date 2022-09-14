export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image_name',
            title: 'Image Name',
            type: 'string',
        },
        {
            name: 'github_link',
            title: 'Github Link',
            type: 'string',
        },
        {
            name: 'website_link',
            title: 'Website Link',
            type: 'string',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            options: {
              layout: 'tags',
            },
        },
        {
            name: 'company',
            title: 'Company Image Name',
            type: 'string',
        },
        { 
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'text',
                },
                {
                    name: 'fr',
                    title: 'French',
                    type: 'text',
                },
                {
                    name: 'ru',
                    title: 'Russian',
                    type: 'text',
                },
                { 
                    name: 'ar',
                    title: 'Arabic',
                    type: 'text',
                }
            ]
        }
    ]
}