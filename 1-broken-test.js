#! /usr/bin/env node
var fixture = require('./fixture-1');
var assertions = require('./assertions.js');

assertions.run(fixture);
