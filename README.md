# jestSandbox

### Output for different uses of `jest` command

#### jest
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src\__tests__\src.test.js (1.38s)
 PASS  src\sub\__tests__\srcsub.test.js (1.277s)
2 tests passed (2 total in 2 test suites, run time 5.072s)
```
#### jest src\sub
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
No tests found for "src\sub".
```

#### jest src\sub\
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
```

#### jest src\sub\\\__tests__
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
No tests found for "src\sub\__tests__".
```

#### jest src\sub\\\__tests__\srcsub.test.js
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
No tests found for "src\sub\\\__tests__\srcsub.test.js".
```

#### cd src
#### jest __tests__
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  sub\__tests__\srcsub.test.js (1.033s)
 FAIL  __tests__\src.test.js (1.153s)
? Src > it should pass
  - Expected: undefined toBe: ''
```

### As above, when using OSX

#### jest
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.384s)
 PASS  src/__tests__/src.test.js (0.419s)
2 tests passed (2 total in 2 test suites, run time 1.619s)
```
#### jest src/sub
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.191s)
1 test passed (1 total in 1 test suite, run time 0.918s)
```

#### jest src/sub/
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.205s)
1 test passed (1 total in 1 test suite, run time 1.027s)
```

#### jest src/sub/__tests__
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.191s)
1 test passed (1 total in 1 test suite, run time 0.891s)
```

#### jest src/sub/__tests__/srcsub.test.js
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.187s)
1 test passed (1 total in 1 test suite, run time 0.893s)
```

#### cd src
#### jest __tests__
```
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  src/sub/__tests__/srcsub.test.js (0.202s)
 PASS  src/__tests__/src.test.js (0.216s)
```
