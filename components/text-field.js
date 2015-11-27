var React = require('react');
var Textarea = require('react-textarea-autosize');
var Icon = require('./icon');
var classNames = require('classnames');
var UniqeIdMixin = require('unique-id-mixin');

var TextField = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.oneOf(['text', 'email', 'search', 'number',
      'tel', 'date', 'month', 'password']),
    maxChars: React.PropTypes.string,
    multiLine: React.PropTypes.bool,
    hideLabel: React.PropTypes.bool,
    required: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
  },
  mixins: [
    UniqeIdMixin
  ],
  getDefaultProps: function() {
    return {
      className: '',
      type: 'text',
      multiLine: false,
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
    var id = this.props.id || this.getNextUid();
    var req = this.props.required;
    var value = this.state.value;
    var multiLine = this.props.multiLine;
    var maxChars = Math.ceil(this.props.maxChars);
    var remainingChars = maxChars - value.length;
    var captionId = errorId = '';
    var caption = error = null;
    var inputDescribedBy = '';

    var Element = multiLine ? Textarea : 'input';

    var rootClass = `TextField ${this.props.className}`;

    var labelClass = classNames({
      'TextField-label': true,
      'u-visuallyHidden': this.props.hideLabel,
    });

    var counterClass = classNames({
      'TextField-counter': true,
      'u-textError': remainingChars < 0,
    });

    if (this.props.errorMessage) {
      errorId = this.getNextUid();
      error = (<div className="TextField-error u-textError" id={errorId} role="alert">
        <Icon key="error" /> {this.props.errorMessage}
      </div>);
    }

    if (this.props.caption) {
      captionId = this.getNextUid();
      caption = (<div className="TextField-caption" id={captionId}>
        {this.props.caption}
      </div>);
    }

    var counter = maxChars ? (<div className={counterClass}>
      {remainingChars}
    </div>) : null;

    var meta = (caption || counter) ? (<div className="TextField-meta">{caption}{counter}</div>) : null;

    return (
      <div className={rootClass}>
        <label className={labelClass} htmlFor={id}>
          {this.props.label}
          {req ? <span className="TextField-reqMarker"><span className="u-visuallyHidden">required</span></span> : null}
        </label>

        <Element
          className="TextField-input"
          id={id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          type={multiLine ? null : this.props.type}
          minRows={multiLine ? this.props.minRows : null}
          value={value}
          disabled={this.props.disabled}
          onChange={this.handleChange}
          aria-invalid={error ? true : null}
          aria-describedby={`${captionId} ${errorId}`} />

        {error}
        {meta}
      </div>
    );
  }
});

module.exports = TextField;
