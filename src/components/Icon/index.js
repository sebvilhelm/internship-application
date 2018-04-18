import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

/* const Icon = ({ fill, size, type, ...rest }) => {
  switch (type) {
    case 'home':
      return (
        <svg
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          fill={fill}
        >
          <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" />
        </svg>
      );
    case 'heart':
    default:
      return (
        <svg
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          fill={fill}
        >
          <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
        </svg>
      );
  }
}; */

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
      <svg
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        fill={fill}
      >
        {this.getPath(type)}
      </svg>
    );
  }
}

export default Icon;
