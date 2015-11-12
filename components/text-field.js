var React = require('react');
var Icon = require('./icon');
var uid = require('lodash/utility/uniqueId');
var classNames = require('classnames');

var TextField = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    name: React.PropTypes.string,
    format: React.PropTypes.oneOf(['text', 'email', 'search', 'number',
      'tel', 'date', 'month', 'password']),
    maxChars: React.PropTypes.string,
    multiLine: React.PropTypes.bool,
    hideLabel: React.PropTypes.bool,
    required: React.PropTypes.bool,
  },
  getDefaultProps: function() {
    return {
      id: uid(),
      format: 'text',
      multiLine: false,
      caption: '',
      hideLabel: false,
    };
  },
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var req = this.props.required;
    var value = this.state.value;
    var maxChars = Math.ceil(this.props.maxChars);
    var remainingChars = maxChars - value.length;

    var Element = this.props.multiLine ? 'textarea' : 'input';

    var labelClass = classNames({
      'TextField-label': true,
      'u-visually-hidden': this.props.hideLabel,
    });

    var counterClass = classNames({
      'Textfield-counter': true,
      'u-text-error': remainingChars < 0,
    });

    var error = this.props.error ? (<p className="TextField-error">
      <Icon key="error" /> {this.props.error}
    </p>) : null;

    var caption = this.props.caption ? (<div className="TextField-caption">
      {this.props.caption}
    </div>) : null;

    var counter = maxChars ? (<div className={counterClass}>
      {remainingChars}/{maxChars}
    </div>) : null;

    return (
      <div className="TextField">
        <label className={labelClass} htmlFor={this.props.id}>
          {this.props.label}
          {req ? <span className="TextField-reqMarker">required</span> : null}
        </label>

        <Element
          className="TextField-input"
          id={this.props.id}
          name={this.props.name}
          type={this.props.format}
          value={value}
          disabled={this.props.disabled}
          onChange={this.handleChange} />

        {error}

        <div className="TextField-meta">{caption}{counter}</div>
      </div>
    );
  }
});

module.exports = TextField;
