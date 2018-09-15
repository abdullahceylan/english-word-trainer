import React, { PureComponent } from 'react';
import { take, shuffle, head } from 'lodash/fp';
import SingleWord from '../SingleWord';
import wordsData from './data/english.json';

class WordList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      word: {},
      show: false,
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown, false);
    this.pickWord();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.touched) {
      this.pickWord();
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = (event) => {
    if (event.keyCode == 32) {
      event.preventDefault();
      this.setState({ show: false });
      this.pickWord();
    };
  }

  pickWord = () => {
    const pick = take(1, shuffle(wordsData));
    const word = head(pick);
    setTimeout(() => {
      this.setState({ word, show: true });
    }, 1000);
  }

  render () {
    return (
      <SingleWord content={this.state.word} visible={this.state.show} />
    );
  }
}

export default WordList;
