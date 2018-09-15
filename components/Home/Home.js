import React, { PureComponent } from 'react';
import WordList from '../WordList';
import {
  HomeWrapper,
  Footer,
  KeyHint,
  TextLink,
} from './Home.styles';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    };
  }

  onTouchStart = (event) => {
    this.setState({ touched: true });
  }

  onTouchEnd = (event) => {
    setTimeout(() => {
      this.setState({ touched: false });
    }, 1000);
  }

  render () {
    return (
      <HomeWrapper
        onTouchStart={(e) => this.onTouchStart(e)}
        onTouchEnd={(e) => this.onTouchEnd(e)}
      >
        <WordList touched={this.state.touched} />
        <Footer>
          <KeyHint>press 'space' to change the word</KeyHint>
          <TextLink href="https://github.com/abdullahceylan/english-word-trainer" target="_blank">code</TextLink>
        </Footer>
      </HomeWrapper>
    )
  }
};

export default Home;
