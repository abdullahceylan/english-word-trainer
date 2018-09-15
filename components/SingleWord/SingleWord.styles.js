import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const WordHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

export const Type = styled.span`
  font-size: 14px;
  opacity: 0;
  transform: scale(0.95);
  transition: all 1s 0.5s;
  position: absolute;
  font-weight: 200;
  padding-left: 10px;
`;

export const WordMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  line-height: 13vh;
  font-size: 24px;
  opacity: 0;
  font-weight: 200;
  padding-left: 10px;
`;

export const Transcription = styled(Text)`
  font-size: 2vw;
  opacity: 0;
  transform: scale(0.95);
  transition: all 1s 0.3s;
  max-height: 19vh;
`;

export const Word = styled.span`
  font-size: ${prop('textSize', 6)}vw;
  text-align: center;
  line-height: 12vh;
  opacity: 0;
  transform: scale(0.95);
  transition: all 1s;
`;

export const Translation = styled(Text)`
  width: 90vw;
  opacity: 0;
  transform: scale(0.95);
  transition: all 1s 0.5s;
  line-height: 5vh;
  text-align: center;
  font-size: 2vw;
  font-style: italic;
`;


export const Comment = styled.span`
  opacity: 0;
`;

export const WordWrapper = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  ${ifProp('visible', css`
    ${Word} {
      opacity: 1;
      transform: scale(1);
    }
    ${Type} {
      opacity: .2;
      transform: scale(1);
    }
    ${Translation} {
      opacity: .4;
      transform: scale(1);
    }
    ${Transcription} {
      opacity: .4;
      transform: scale(1);
    }
  `)}
`;
