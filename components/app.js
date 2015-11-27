var React = require('react');
var TextField = require('./text-field');

var App = function(props) {
  return (
    <div className="App">
      <header className="Header">
        <div className="HeaderContent">
          <h1 className="Header-title">Test App</h1>
          <div className="Header-grow">
            <TextField className="TextField--flat" type="search" label="Search" placeholder="Search…" hideLabel />
          </div>
        </div>
      </header>
      <div className="Section">
        <TextField label="Full Name" />
      </div>
      <div className="Section">
        <TextField label="Email" type="email" required />
      </div>
      <div className="Section">
        <TextField label="Password" type="password" required />
      </div>
      <div className="Section">
        <TextField label="Phone (optional)" type="tel" />
      </div>
      <div className="Section">
        <TextField label="Numeric value" type="number" caption="TODO: This should create a stepper" />
      </div>
      <div className="Section">
        <TextField label="Something" errorMessage="Manually force an error state" />
      </div>
      <div className="Section">
        <TextField
          label="Tweet"
          maxChars="140"
          multiLine
          minRows={2} />
      </div>
    </div>
  );
}

module.exports = App;
