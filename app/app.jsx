var React = require('react');
var ReactDOM = require('react-dom');
//these are used in Greeter.js only
//var GreeterMessage = require('./components/GreeterMessage');
//var GreeterForm = require('./components/GreeterForm');
//var Greeter = require('./components/Greeter');
var Greeter = require('Greeter');

/*
ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('app')
)
*/
var firstName = "User";
var message = "This is a boilerplate app!";
ReactDOM.render(
  <Greeter name={firstName} msg={message}/>,
  document.getElementById('app')
);
