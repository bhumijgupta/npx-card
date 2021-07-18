#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');

// Read output.txt and print to console
const output = fs.readFileSync(path.join(__dirname, 'output.txt'), 'utf8');
console.log(output);