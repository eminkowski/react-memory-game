# React Memory Game
This is a basic memory game created with React.


### Demo
A running demo is available at [http://react-memory-game.eminkowski.com](http://react-memory-game.eminkowski.com).


### Game Rules
* At the start of the game, the user is presented with a grid of 24 facedown cards.
* Each card looks identical face down, but has a face-up value that is matched by only one
other card on the table.
* When the user clicks a card, it flips over revealing its value.
* When the user clicks the next card, its value is revealed and then compared against the
other face up card. If they are equal, both cards disappear. If they are different, they flip
back down.
* The game is continued until there are no cards left.


### Quickstart
```bash
$ git clone https://github.com/eminkowski/react-memory-game.git

$ cd react-memory-game
$ npm install
$ npm start     # starts development server
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.
