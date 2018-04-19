import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

class Icon extends React.Component {
  static propTypes = {
    fill: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
  };
  static defaultProps = {
    fill: '#222222',
    size: 24,
    type: undefined,
  };
  getPath = type => {
    switch (type) {
      case 'home':
        return (
          <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" />
        );
      case 'rocket':
        return (
          <path d="M16.21 16.95a5 5 0 0 1-4.02 4.9l-3.85.77a1 1 0 0 1-.9-.27l-.71-.7a2 2 0 0 1 0-2.83l1.44-1.45a13.17 13.17 0 0 1-1.42-1.41L5.31 17.4a2 2 0 0 1-2.83 0l-.7-.7a1 1 0 0 1-.28-.9l.77-3.86a5 5 0 0 1 4.9-4.02h.86a13.07 13.07 0 0 1 12.82-5.47 1 1 0 0 1 .83.83A12.98 12.98 0 0 1 16.2 16.1v.85zm-4.41 2.94a3 3 0 0 0 2.41-2.94v-1.4a1 1 0 0 1 .47-.84A11.04 11.04 0 0 0 19.8 4.33 10.98 10.98 0 0 0 9.42 9.45a1 1 0 0 1-.85.47h-1.4a3 3 0 0 0-2.94 2.4l-.66 3.34.33.33 2.24-2.24a1 1 0 0 1 1.52.12 11.08 11.08 0 0 0 2.6 2.6 1 1 0 0 1 .12 1.52l-2.24 2.24.33.33 3.33-.67zM15 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        );
      case 'github':
        return (
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        );
      case 'twitter':
        return (
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        );
      case 'linkedin':
        return (
          <g>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
          </g>
        );
      case 'heart':
      default:
        return (
          <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
        );
    }
  };
  render() {
    const { fill, size, type, ...rest } = this.props;
    return (
      <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={fill}>
        {this.getPath(type)}
      </svg>
    );
  }
}

export default Icon;
