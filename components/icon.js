var React = require('react');

var Icon = function(props) {
  var className = `Icon ${props.className}`;

  return <svg className={className}></svg>;
}

Icon.defaultProps = {
  className: '',
};

module.exports = Icon;
