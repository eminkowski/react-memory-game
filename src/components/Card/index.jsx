import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './_styles.scss';

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    isMatch: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  handleClick = (e) => {
    const { id, value, isFlipped, onClick } = this.props;
    
    // Do not proceed unless the card has been flipped
    if (!isFlipped) {
      // Call parent function with value and id
      onClick(value, id);
    }
  }
  
  render() {
    const { className, style, value, isFlipped, isMatch } = this.props;

    // Conditionally add styling for flipped and matched
    return (
      <section
        className={cn('card', className)}
        style={style}
        onClick={this.handleClick}
      >
        <div className={cn('card-container', { 'card-container--hidden': !isFlipped })}>
          <figure className={cn('card-front', { 'card--matched': isMatch })}>
            {value}
          </figure>
          <figure className="card-back" />
        </div>
      </section>
    );
  }
};
