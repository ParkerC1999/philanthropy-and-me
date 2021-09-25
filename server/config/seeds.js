const db = require('./connection');
const { User, Category, Organization } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
    const categories = await Category.insertMany([
        { name: 'Humanitarian' },
        { name: 'Nature and Environment' },
        { name: 'Women and Girls' },
        { name: 'Mental Health' },
        { name: 'Children' },
        { name: 'Homeless' },
        { name: 'Non-Profit' },
        { name: 'educational' }
    ]);
    console.log('categories seeded');

    await Organization.deleteMany();

    await Organization.insertMany([
        {
            title: 'CARE International',
            description: 'CARE is a major international humanitarian agency delivering emergency relief and long-term international development projects. Founded in 1945, CARE is nonsectarian, impartial, and non-governmental. It is one of the largest and oldest humanitarian aid organizations focused on fighting global poverty.',
            image: 'care.jpg',
            category: categories[0].id,
            site: 'https://www.care.org/'
        },
        {
            title: 'International Rescue Committee',
            description: 'The International Rescue Committee responds to the world’s worst humanitarian crises and helps people whose lives and livelihoods are shattered by conflict and disaster to survive, recover and gain control of their future.',
            image: 'int-rescue-committee.jpg',
            category: categories[0].id,
            site: 'https://www.rescue.org/'
        },
        {
            title: 'American Red Cross',
            description: 'The American Red Cross is a non-profit humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.',
            image: 'american-red-cross.jpg',
            category: categories[0].id,
            site: 'https://www.redcross.org/'
        },
        {
            title: 'The World Food Programme',
            description: 'The World Food Programme is the food-assistance branch of the United Nations. It is the world\'s largest humanitarian organization, the largest one focused on hunger and food security, and the largest provider of school meals.',
            image: 'wfp.jpg',
            category: categories[0].id,
            site: 'https://www.wfpusa.org/'
        },
        {
            title: 'Doctors Without Borders',
            description: 'Médecins Sans Frontières, sometimes rendered in English as Doctors Without Borders, is an international humanitarian medical non-governmental organisation of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.',
            image: 'doctors-without-borders-sq-new.jpg',
            category: categories[0].id,
            site: 'https://www.doctorswithoutborders.org/'
        },
        {
            title: 'Oxfam',
            description: 'Oxfam is a British founded confederation of 20 independent charitable organizations focusing on the alleviation of global poverty, founded in 1942 and led by Oxfam International. It is a major nonprofit group with an extensive collection of operations.',
            image: 'oxfam.jpg',
            category: categories[0].id,
            site: 'https://www.oxfamamerica.org/'
        },
        {
            title: 'The Nature Conservancy',
            description: 'Our mission is to conserve the lands and waters on which all life depends. To achieve this, we must boldly address the biodiversity and climate crises over the next decade.',
            image: '',
            category: categories[1].id,
            site: 'https://www.nature.org/en-us/'
        },
        {
            title: 'Natural Resource Defense Council',
            description: 'NRDC works to safeguard the earth—its people, its plants and animals, and the natural systems on which all life depends.',
            image: 'nrdc.jpg',
            category: categories[1].id,
            site: 'https://www.nrdc.org/'
        },
        {
            title: 'World Wildlife Fund',
            description: "Our mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.",
            image: 'wwf.jpg',
            category: categories[1].id,
            site: 'https://www.worldwildlife.org/'
        },
        {
            title: 'The American Society for the Prevention of Cruelty to Animals',
            description: 'The American Society for the Prevention of Cruelty to Animals is a non-profit organization dedicated to preventing cruelty to animals.',
            image: 'aspca.jpg',
            category: categories[1].id,
            site: 'https://www.aspca.org/'
        },
        {
            title: 'Greenpeace',
            description: 'Greenpeace is a non-governmental environmental organisation with offices in over 55 countries and an international coordinating body in Amsterdam, the Netherlands. Greenpeace was founded in 1971 by Irving Stowe and Dorothy Stowe, Canadian and US expat environmental activists.',
            image: 'greenpeace.jpg',
            category: categories[1].id,
            site: 'https://www.greenpeace.org/usa/'
        },
        {
            title: 'The Sierra Club',
            description: 'The Sierra Club is the most enduring and influential grassroots environmental organization in the United States. We amplify the power of our 3.8 million members and supporters to defend everyone’s right to a healthy world.',
            image: 'sierra-club.jpg',
            category: categories[1].id,
            site: 'https://www.sierraclub.org/'
        }
    ])
    console.log('organizations seeded');

    // await User.deleteMany();

    // await User.create([

    // ]);
    console.log('users seeded');

    process.exit();
});