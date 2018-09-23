<h1 align="center">english-word-trainer</h1>

<p align="center">An English word learning web application built with React.js (next.js), styled-components and Firebase.</p>

<p align="center"><a href="https://codeclimate.com/github/abdullahceylan/english-word-trainer/maintainability"><img src="https://api.codeclimate.com/v1/badges/f21bd5a2b6d1fc1c4ef6/maintainability" /></a></p>

## Prerequisites

In order to run this app you will need a [Firebase Database](https://firebase.google.com/docs/web/setup).

## Installation

1. Clone this repo
1. Type `cd english-word-trainer` to enter the project folder
1. Run `npm install`
1. Rename `/config/config.example.js` to `/config/config.js` and add your Firebase config
1. Import `/english.data.example.json` into your [Firebase database](https://firebase.google.com/docs/database/web/start)
1. Run `npm run dev` and visit [localhost:3000](http://localhost:3000)

## Build

1. Run `npm run build`
1. The compiled version will be in `/.next/dist/`

## Live Example

You can test on https://english-word-trainer.herokuapp.com

## To-Do
- [ ] Add new word
- [ ] Word pronouncing support
