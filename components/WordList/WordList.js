import React, { PureComponent } from 'react';
import { take, shuffle, head } from 'lodash/fp';
import firebase from '../../firebase';
import SingleWord from '../SingleWord';
import { WordListWrapper } from './WordList.styles';

class WordList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: {
        word: `press 'space' to start`,
      },
      show: true,
    };

    this.words = [];
  }

  componentWillMount = () => {
    this.database = firebase.database();
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown, false);
    this.getWordList();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.touched) {
      this.pickWord();
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  getWordList = () => {
    const itemsRef = this.database.ref('words').orderByChild('id');
    itemsRef.on('value', (snapshot) => {
      this.words = snapshot.val();
    });
  }

  handleKeyDown = (event) => {
    if (event.keyCode == 32) {
      event.preventDefault();
      this.setState({ show: false });
      this.pickWord();
    };
  }

  pickWord = () => {
    const pick = take(1, shuffle(this.words));
    const word = head(pick);
    setTimeout(() => {
      this.setState({ currentWord: word, show: true });
    }, 1000);
  }

  render () {
    return (
      <WordListWrapper>
        { this.words && <SingleWord content={this.state.currentWord} visible={this.state.show} /> }
      </WordListWrapper>
    );
  }
}

export default WordList;
