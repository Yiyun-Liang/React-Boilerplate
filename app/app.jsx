var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Isa',
  location: 'Waterloo'
};

var objTwo = {
  age: 19,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('app')
);
