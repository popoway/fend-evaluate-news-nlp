# Evaluate a News Article with Natural Language Processing

## Introduction

It is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. This project is part of the [Udacity Front End Web Developer Nanodegree Program](https://classroom.udacity.com/nanodegrees/nd0011/). 

The project aims at practicing the following skills:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Installation
1. Run `npm install` to install all the dependencies.
2. Create a file named `.env` and supply with your API key for MeaningCloud. For example:
```
API_KEY=your_foo_bar_api_key
```
That completes the initial setup.
3. To start a development build, use `npm run build-dev`
4. To start a production build, use `npm run build-prod`
5. Use `npm run start` to start the Express server.
6. To run unit testing for the client side JavaScript, use `npm test`

## Prerequisite
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API - Aylien

## Runtime Environment
- Node.js
- Express
