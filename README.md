# jest-testing-practice

Learn TDD like I did through [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice#using-es6-import-statements-with-jest)

### Note:
The current version of Jest, by default, does **not** recognize **ES6 import statements**. If you wish to utilize **ES6 import statements** follow the Jest [documentation](https://jestjs.io/docs/getting-started#using-babel) for using Babel and include the following code in your jest.config.js:
```
module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
};
```  
### Here are some general notes about **testing** that may be helpful:
![notes on testing](./images/f16n1v4b.bmp)
