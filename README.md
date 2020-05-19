# Portfolio Site

Hi! Thank you for checking out this repo.
I built this site to showcase my work, as well as stretch my new skills in vue.

> Keep track of my progress on my [trello board](https://trello.com/b/lWsAhIzN/portfolio-site)! 

## Here are some key skills used while making this site:
* VueJS
* VueRouter
* VueX
* Normalised database structure for minimised database duplication
* Inline SVGs for more flexibility and scalability
* No-Library CSS Animations and layouts
* Flexbox and CSS Grid
* BEM CSS Class notation
* Axios for Node backend calls
* MondoDb Database
* Node JS backend
* Express bespoke blog system
* Token based Authentication

## Features
* Image upload
* Single page application
* Filter projects by skills
* Markdown Blog post creation

## [Planned features]
* Hosting on ???

## [Icebox (no time soon) features]
* Per skill description in project
* Quick blog with timestamps
* Feedback system
* GraphQl
* Canonical Links
* Nuxt.js

## [Changed features]
* Axios for firebase api calls - This was changed to the dedicated firebase library: change/firestore branch
* Firebase firestore Integration with bespoke blog creation and editing: change/nodeBackend branch
* Firestore rules to allow only privilaged users to write posts (This mostly on the firebase end): change/nodeBackend branch
* Firebase authentication: change/nodeBackend branch
* Firebase storage for image uploads: change/nodeBackend branch

This is a Vue js and Firebase single page application which should hopefully showcase my previous work, while being a great showcase of my skill in itself!

## Instalation
`npm install`

### Development (hot reload)
`npm run serve`

### Deployment (build)
`npm run build`