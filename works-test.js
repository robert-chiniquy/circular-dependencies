#! /usr/bin/env node
var fixture = require('./fixture/re-ordered-index');
var assertions = require('./assertions.js');

assertions.run(fixture);
