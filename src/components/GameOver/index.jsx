import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './_styles.scss';

export default class GameOver extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { className, style, onClick } = this.props;

    return (
      <div className={cn('game-over', className)} style={style}>
        <div className="game-over-message">
          <span className="game-over-star" role="img" aria-label="star">⭐</span>
          <span className="game-over-text">You did it!</span>
          <span className="game-over-star" role="img" aria-label="star">⭐</span>
        </div>
        <button className="game-over-button" onClick={onClick}>
          Play again?
        </button>
      </div>
    );
  }
};
