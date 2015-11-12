'use strict';

var React = require('react');
var TextField = require('./text-field');

var App = function(props) {
  return (
    <div className="App">
      <h1>Test App</h1>
      <TextField label="Tweet" maxchars="140" />
    </div>
  );
}

module.exports = App;
