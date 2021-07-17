#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const labels = {
    work: "Work: ",
    youtube: "Youtube: ",
    github: "Github: ",
    twitter: "Twitter: ",
    linkedin: "LinkedIn: ",
    web: "Web: ",
    card: "Card: "
}

const data = {
    work: "Software Developer at AppDynamics",
    youtube: "https://bhumij.tech/youtube",
    github: "https://github.com/bhumijgupta",
    twitter: "https://twitter.com/bhumijgupta",
    linkedin: "https://www.linkedin.com/in/bhumijgupta",
    web: "https://bhumij.tech",
    card: "npx bhumijgupta"
}

const newline = '\n'

const options = {
    padding: 1,
    margin: 1,
    borderRadius: 1,
    align: "center"
}

// Get max length of key of labels
const getMaxLength = (labels) => {
    let max = 0;
    for (let key in labels) {
        if (max < labels[key].length) {
            max = labels[key].length;
        }
    }
    return max;
}

const maxLabelsLength = getMaxLength(labels)
const maxValueLength = getMaxLength(data)

// Add left padding to make text of constant width
const paddedLabels = (string, length, leftPad = true) => {
    let padding = ''
    for (let i = 0; i < length - string.length; i++) {
        padding += ' '
    }
    return leftPad ? padding + string : string + padding
}

Object.keys(labels).forEach((key) => {
    labels[key] = paddedLabels(labels[key], maxLabelsLength)
})

Object.keys(data).forEach((key) => {
    data[key] = paddedLabels(data[key], maxValueLength, false)
})


const string = `Bhumij Gupta ${chalk.green("/")} Programylis` + newline + newline +
    chalk.bold(labels.work) + data.work + newline +
    chalk.bold(labels.youtube) + data.youtube + newline +
    chalk.bold(labels.github) + data.github + newline +
    chalk.bold(labels.twitter) + data.twitter + newline +
    chalk.bold(labels.linkedin) + data.linkedin + newline +
    chalk.bold(labels.web) + data.web + newline + newline +
    chalk.bold(labels.card) + data.card

// Create a box with data and options
const box = boxen(string, options);

console.log(box)