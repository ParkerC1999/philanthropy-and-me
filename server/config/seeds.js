const db = require('./connection');
const { User, Category, Organization } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
    const categories = await Category.insertMany([
        { name: 'Humanitarian' },
        { name: 'Nature and Environment' }
    ]);
    console.log('categories seeded');

    await Organization.deleteMany();

    const organization = await Organization.insertMany([
        {
            name: 'CARE International',
            description: 'CARE is a major international humanitarian agency delivering emergency relief and long-term international development projects. Founded in 1945, CARE is nonsectarian, impartial, and non-governmental. It is one of the largest and oldest humanitarian aid organizations focused on fighting global poverty.',
            image: 'care.jpg',
            category: categories[0].id,
            site: 'https://www.care.org/'
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0].id,
            site: ''
        }
    ])
    console.log('organizations seeded');

    await User.deleteMany();

    await User.create([

    ]);
    console.log('users seeded');

    process.exit();
});