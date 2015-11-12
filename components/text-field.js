'use strict';

var React = require('react');
var uid = require('lodash/utility/uniqueId');

var TextField = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'text',
      id: uid(),
      caption: '',
    };
  },
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var type = this.props.type;
    var id = this.props.id;
    var maxchars = this.props.maxchars;
    var value = this.state.value;

    return (
      <div className="TextField">
        <label className="TextField-label" htmlFor={id}>
          {this.props.label}
        </label>

        <input
          className="TextField-input"
          id={id}
          type={type}
          value={value}
          onChange={this.handleChange} />

        <div className="TextField-meta">
          <div className="TextField-caption">{this.props.caption}</div>
          <div className="TextField-counter">{maxchars - value.length}/{maxchars}</div>
        </div>
      </div>
    );
  }
});

module.exports = TextField;
