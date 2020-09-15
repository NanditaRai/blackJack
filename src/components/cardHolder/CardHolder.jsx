/** @jsx jsx */
import { jsx } from '@emotion/core';
import Card from "../card/Card";
import {Container} from './styles';

const CardHolder = ({ cards }) => (
  <Container>
    {cards.map(card => (
      <Card card={card} />
    ))}
  </Container>
);

export default CardHolder;
