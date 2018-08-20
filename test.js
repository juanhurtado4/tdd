const assert = require('assert');

const addFunc = require('./index.js');

assert(addFunc(1, 1) === 2);
assert(addFunc(11, 132) === 143);
assert(addFunc(1, 0) === 1);
