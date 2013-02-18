circular-dependencies
=====================
          _    __ 
__      _| |_ / _|
\ \ /\ / / __| |_ 
 \ V  V /| |_|  _|
  \_/\_/  \__|_|  

Both fixtures have the same dependency structure. One exhibits what must be a bug in node's `require()`: an incomplete object being returned to a top-level require. This bug seems to only manifest when `module.exports` is used, and only when some orderings of requires occur.

```
tsumego:circular-dependencies(master) rch$ diff fixture-1 fixture-2
diff fixture-1/a.js fixture-2/a.js
1,6c1,2
< 
< module.exports = {
< 	fish : 2,
< 	b: require('./b')
< };
< 
---
> exports.fish = 2;
> exports.b = require('./b');
tsumego:circular-dependencies(master) rch$ diff 1-broken-test.js 2-mysteriously-works-test.js 
2c2
< var fixture = require('./fixture-1');
---
> var fixture = require('./fixture-2');
tsumego:circular-dependencies(master) rch$ ./all-tests.sh 
+ ./2-works-test.js
+ ./2-mysteriously-works-test.js
+ ./1-works-test.js
+ ./1-broken-test.js

assert.js:102
  throw new assert.AssertionError({
        ^
AssertionError: b's reference to a is complete
    at Object.exports.run (/Users/rch/repo/circular-dependencies/assertions.js:20:9)
    at Object.<anonymous> (/Users/rch/repo/circular-dependencies/1-broken-test.js:5:12)
    at Module._compile (module.js:449:26)
    at Object.Module._extensions..js (module.js:467:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.runMain (module.js:492:10)
    at process.startup.processNextTick.process._tickCallback (node.js:244:9)
```
