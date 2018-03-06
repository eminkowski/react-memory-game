import React, { PureComponent } from 'react';

import Table from './components/Table';
import { CARD_COUNT } from './constants';

export default class App extends PureComponent {
  render() {
    // Pass the card count variable as a prop to the table component
    return (
      <div>
        <h1 className="app-title">Memory Game</h1>
        <Table cardCount={CARD_COUNT} />
      </div>
    );
  }
}
