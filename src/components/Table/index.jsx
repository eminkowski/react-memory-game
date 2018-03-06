import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { shuffle } from 'lodash/collection';

import Card from '../../components/Card';
import GameOver from '../../components/GameOver';
import { TIMEOUT_IN_MS } from '../../constants';

import './_styles.scss';

export default class Table extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.string,
    cardCount: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    let { cardCount } = props;

    // Use default card count of 24 if provided value is invalid
    if (isNaN(cardCount) || cardCount < 2 || cardCount % 2 !== 0) {
      cardCount = 24;
    }

    this.uniqueCardCount = cardCount / 2;

    this.state = {
      cards: this.createCards(),
      preventFlip: false,
      firstCard: null,
      totalMatches: 0,
    };
  }

  createCards = () => {
    const cards = [];

    // Add two cards for each value to the array
    for (let i = 1; i <= this.uniqueCardCount; i++) {
      cards.push({ value: `${i}`, isFlipped: false, isMatch: false });
      cards.push({ value: `${i}`, isFlipped: false, isMatch: false });
    }

    // Shuffle cards before returning
    return shuffle(cards);
  }

  renderCards = () => {
    const { cards } = this.state;

    // Convert cards array to JSX
    return cards.map((card, idx) => {
      return (
        <Card
          key={idx}
          id={`${idx}`}
          value={card.value}
          isFlipped={card.isFlipped}
          isMatch={card.isMatch}
          onClick={this.handleCardClick}
        />
      );
    });
  }

  handleGameOverClick = () => {
    // Set the state back to its original values
    this.setState({
      cards: this.createCards(),
      preventFlip: false,
      firstCard: null,
      totalMatches: 0,
    });
  };

  handleCardClick = (value, id) => {
    if (this.state.preventFlip) {
      // Stop execution if we are in the matching process
      return;
    }

    const { firstCard, totalMatches } = this.state;

    // Create new cards array from existing array
    const cards = [...this.state.cards];

    // Set this card to flipped
    cards[id].isFlipped = true;

    // Update the cards and prevent flip while we are in the matching process
    this.setState({ cards, preventFlip: true });

    if (!firstCard) {
      // Set this card as the first card, then stop execution
      this.setState({
        preventFlip: false,
        firstCard: { id, value },
      });
      return;
    }

    if (value !== firstCard.value) {
      // This is the second card when there is -no- match
      setTimeout(() => {
        cards[id].isFlipped = false;
        cards[firstCard.id].isFlipped = false;

        this.setState({
          cards,
          preventFlip: false,
          firstCard: null,
        });
      }, TIMEOUT_IN_MS);

    } else {
      // This is the second card when there -is- a match
      cards[firstCard.id].isMatch = true;
      cards[id].isMatch = true;

      this.setState({
        preventFlip: false,
        firstCard: null,
      });

      setTimeout(() => {
        this.setState({ cards, totalMatches: totalMatches + 1 });
      }, TIMEOUT_IN_MS);
    }
  }

  render() {
    const { className, style } = this.props;
    const { cards, totalMatches } = this.state;

    let children = null;

    // Check if game is over
    const isGameOver = totalMatches === this.uniqueCardCount;

    if (isGameOver) {
      // Display the game over message
      children = <GameOver onClick={this.handleGameOverClick} />;
    } else {
      // Display the cards
      children = (
        <div className="table-cards">
          {this.renderCards(cards)}
        </div>
      );
    }

    return (
      <div className={cn('table', className)} style={style}>
        {children}
      </div>
    );
  };
};
