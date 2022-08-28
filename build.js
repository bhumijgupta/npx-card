'use strict'

const boxen = require('boxen');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

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
    work: "Software Developer at EpiFi(Fi.money). Prev at AppDynamics",
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
    align: "center",
    borderColor: "cyan",
    borderStyle: "bold"
}

const heading = `  Bhumij Gupta / Programylis  `

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


const string = chalk.whiteBright(heading) + newline + newline + newline +
    chalk.yellow(labels.work) + data.work + newline +
    chalk.yellow(labels.youtube) + data.youtube + newline + newline +
    chalk.yellow(labels.github) + data.github + newline +
    chalk.yellow(labels.twitter) + data.twitter + newline +
    chalk.yellow(labels.linkedin) + data.linkedin + newline +
    chalk.yellow(labels.web) + data.web + newline + newline +
    chalk.yellow(labels.card) + data.card

// Create a box with data and options
const box = boxen(chalk.green(string), options);

// write box to current directory/bin
fs.writeFileSync(path.join(__dirname, './bin/output.txt'), box);