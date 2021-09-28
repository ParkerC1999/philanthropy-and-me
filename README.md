# philanthropy-and-me

## Description
Philanthropy-and-me provides generous philanthropists and donors a platform to discover non-profit charitable organizations from a selection of category types. In a few simple clicks, users can narrow down to a selection of a few of the highest impact/largest organizations in a respective field. The page displays a quick blurb about the organization, a link to their website and a "donate now" button where logged in users can make secure contributions right from philanthropy and me. The application's components use a global state to ensure scalability to potentially include additional categories and thousands of registered non-profits or 501(c)(3).

## Table of Contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
Clone down the repository found at https://github.com/ParkerC1999/philanthropy-and-me. The site uses individual environmental variables for username and password, so locate the .env file and update appropriate fields accordingly. This file is included in the .gitignore file to keep it from pushing to your repo. Necessary packages can be installed using npm install. The current version has a database that can be seeded for testing/use. In your terminal, navigate to the root directory and open mysql in your terminal and type 'USE rate_my_rental_db'. Next, use command 'source db/schema.sql' and finally, seed the tables using 'source db/seeds.sql'. You'll now have data to work with. Quit mysql and from your terminal, run 'npm start'. The final piece of feedback after running the command should read 'Now running on PORT 3001'. You'll be able to view information in your browser by adding localhost:3001 to the address bar or using insomnia core. Associated routes can be manually entered in the url for now to view content.

## Technologies
* [GraphQL](https://graphql.org/)
* [Node.js](https://nodejs.org/en/)
* [mongoDB Atlas](https://docs.atlas.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [React](https://reactjs.org/)
* [Stripe](https://stripe.com/docs)

## Usage
Instructions for use as listed in above in the description. Compare with associated screenshots:
![philanthropy-and-me](https://user-images.githubusercontent.com/82545902/135026196-fd675b54-30d6-4522-981d-763ea1a95353.jpeg)

## Credits
* J. Antonio Sanchez: https://github.com/Scuobahia 
* Brandon Evans: https://github.com/bevans0708 
* Clayton Andersen: https://github.com/Clayton-Andersen 
* Parker Christiansen: https://github.com/ParkerC1999

## Github Repo
https://github.com/ParkerC1999/philanthropy-and-me

## Contributor Email Addresses
* J. Antonio Sanchez: Scuobahia1@gmail.com 
* Brandon Evans: brandon.evans0708@gmail.com 
* Clayton Andersen: utah.clayton@gmail.com 
* Parker Christiansen: parkman.christiansen@gmail.com


## License
MIT
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
