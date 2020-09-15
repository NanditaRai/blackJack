/** @jsx jsx */
import { jsx } from '@emotion/core';
import {CardItem} from './styles';

const CardHolder = ({ card }) => {
  const getColor = (type) => {
    switch(type){
      case 'heart': return '#FF0000';
      case 'spade': return '#00FFFF';
      case 'diamond': return '#008000';
      case 'clubs': return '#FFFF00';
      default: return '#D3D3D3';
    }
  }
  const color = getColor(card.deckType);
  return(
    <CardItem color={color}>
      <div>{card.deckType}</div>
      <div>{card.card}</div>
    </CardItem>
  )
};

export default CardHolder;
