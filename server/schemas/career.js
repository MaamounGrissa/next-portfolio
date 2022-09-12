export default {
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Education', value: 'education' },
                    { title: 'Experience', value: 'experience' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                {
                    name: 'en',
                    title: 'English',
                    type: 'string',
                },
                {
                    name: 'fr',
                    title: 'French',
                    type: 'string',
                },
                {
                    name: 'ru',
                    title: 'Russian',
                    type: 'string',
                },
                {
                    name: 'ar',
                    title: 'Arabic',
                    type: 'string',
                }
            ],


        },
        {
            name: 'image_name',
            title: 'Image Name',
            type: 'string'
        },
        {
            name: 'start_date',
            title: 'Start Date',
            type: 'string'
        },
        {
            name: 'end_date',
            title: 'End Date',
            type: 'string'
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
            ],
        },
        { 
            name: 'order',
            title: 'Order',
            type: 'number',
        }
    ]
}