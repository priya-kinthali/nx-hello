import messenger from 'webext-messenger';
const unusedVar = 42; // This should trigger a warning/error
console.log('Hello, world!'); // This should be fine
const { getJestProjects } = require('@nrwl/jest');

export default { projects: getJestProjects() };
