#! /usr/bin/env node
var fixture = require('./fixture');
var assertions = require('./assertions.js');

assertions.run(fixture);
