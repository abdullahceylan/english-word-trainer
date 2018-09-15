import React from 'react';
import PropTypes from 'prop-types';
import { has, isArray, isEmpty } from 'lodash/fp';
import { DEFAULT_LANG } from '../../config';
import {
  WordWrapper,
  WordHeader,
  Type,
  WordMain,
  Transcription,
  Word,
  Translation,
  Comment,
} from './SingleWord.styles';

const SingleWord = ({ content, visible }) => {
  if (isEmpty(content)) {
    return null;
  }
  const { id, word, translation, transcription, comment, type } = content;
  const currentLangTranslation = translation && has(DEFAULT_LANG, translation) && translation[DEFAULT_LANG];
  return (
    <WordWrapper visible={visible}>
      <WordHeader>
        <Type>{type}</Type>
      </WordHeader>
      <WordMain>
        <Transcription>{transcription}</Transcription>
        <Word textSize={word.length > 19 ? 6 : 8}>{word}</Word>
        <Translation>{currentLangTranslation}</Translation>
        <Comment>{comment}</Comment>
      </WordMain>
    </WordWrapper>
  );
}

SingleWord.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  visible: PropTypes.bool,
};

SingleWord.defaultProps = {
  visible: false,
}

export default SingleWord;
