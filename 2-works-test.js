#! /usr/bin/env node
var fixture = require('./fixture-2/re-ordered-index');
var assertions = require('./assertions.js');

assertions.run(fixture);
