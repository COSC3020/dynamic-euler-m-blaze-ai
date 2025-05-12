const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(Math.abs(e(10) - 2.7182818011463845) < 1e-12);

assert(Math.abs(e(5) - 2.7166666666666663) < 1e-12);
assert(Math.abs(e(15) - 2.71828182845823) < 1e-12);
assert(Math.abs(e(20) - 2.7182818284590455) < 1e-12);
