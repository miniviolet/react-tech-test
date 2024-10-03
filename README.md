# react-tech-test

This test is aimed at software developers with a background in React.

## Setup

Please create a fork of this repo and make sure it is public. Click the Fork button in the top right of the repo, as shown in this image.

![Screenshot 2023-06-16 at 15 55 52](https://github.com/asquareduk/react-native-tech-test/assets/17218062/daa4f402-480a-47c5-9a9f-95728238575d)

## Introduction

This challenge will require you to use Javascript and React to build out a couple of pages that display data from an API.

The API we will use for this (because it's free and doesn't require any authentication) is [TheCocktailDB API](https://www.thecocktaildb.com/api.php).

The repo is set up with [Vite](https://vitejs.dev/) + [React](https://react.dev/). Once you have the repo set up locally, please do the following:

```bash
cd react-tech-test

npm install
npm run dev
```

Please consider best practices for usability, performance, code quality, and ideally commit often with descriptive commit messages.

## The Challenge

You will need to build 2 pages:

- A list screen that displays a list of drinks
- A detail screen that displays details about a specific drink

The list screen should display a list of drinks, including the drink's image, the name of the drink, and a description (limited to one line, with ellipsis if the description is too long).

You should display only 10 drinks from the API.

Tapping on one of the drinks in this list should take you to the detail screen for this drink.

The detail screen should display the drink's image, name of the drink, alcohol by volume (abv), tagline, full description, and one other piece of data of your choice.

Optional bonus point: add some kind of user interface and functionality to display more drinks.

Optional bonus point: add a loading state while drinks are loading.

Just to note, We don't have any strict design for either of the pages, but try to make them look nice/tidy.

## Submission

When you are done, commit and push everything to your own repository and send us a link to the resposity via email. If you have problems forking this repo or any issues with getting your submission up on GitHub then please zip up your technical test folder and send it to us via email.
