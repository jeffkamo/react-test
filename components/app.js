var React = require('react');
var TextField = require('./text-field');

var App = function(props) {
  return (
    <div className="App">
      <h1>Test App</h1>
      <TextField
        label="Tweet"
        caption="Type your tweet here."
        maxChars="140"
        multiLine
        hideLabel />
    </div>
  );
}

module.exports = App;
