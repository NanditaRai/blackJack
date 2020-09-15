/** @jsx jsx */
import { jsx } from "@emotion/core";
import {useState, useEffect} from 'react';
import { Holder } from './styles';
import CardHolder from '../cardHolder/CardHolder';

const Board = () => {
  const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  const deck = {
    heart: cards,
    spade: cards,
    diamond: cards,
    clubs: cards,
  }

  const [myCards, updateMyCards] = useState([]);
  const [dealerCards, updateDealerCards] = useState([]);
  const [myTotal, updateMyTotal] = useState(0);
  const [dealerTotal, updateDealerTotal] = useState(0);

  const firstDraw = () => {
    let arr = [];
    arr.push(draw());
    arr.push(draw());
    updateMyCards(arr);

    arr = []
    arr.push(draw());
    arr.push(draw());
    updateDealerCards(arr);
  }

  useEffect(()=>{
    //draw first 2 cards for both players
    firstDraw()
  }, []);

  useEffect(()=>{
    //update my Total
    let sum = 0;
    myCards.forEach((item) => {
       sum += item.cardValue;
    })
    updateMyTotal(sum);
  }, [myCards]);


  useEffect(()=>{
    //update dealer Total
    let sum = 0;
    dealerCards.forEach((item) => {
       sum += item.cardValue;
    })
    updateDealerTotal(sum);
  }, [dealerCards]);

  useEffect(()=> {
    //check for winner
    if(myTotal === 21 || dealerTotal > 21){
      alert('You Won')
    }
    if(dealerCards === 21 || myTotal > 21){
      alert('Dealer Won')
    }
  }, [myTotal, dealerTotal])

  const getCards = (index) => {
    switch(index){
      case 0: return 'heart';
      case 1: return 'spade';
      case 2: return 'diamond';
      case 3: return 'clubs';
      default: return null;
    }
  }

  const getCardValue = (value) => {

    switch(value){
      case 'J':
      case 'Q':
      case 'K': return 10;
      case 'A': return 1;
      default: return value;
    }
  }

  const draw = () => {
    let typeIndex = Math.floor(Math.random() * (Object.keys(deck).length));
    let cardIndex = Math.floor(Math.random() * cards.length);

    
    let deckType = getCards(typeIndex);
    let arr = deck[deckType];
    let card = arr[cardIndex];
    let cardValue = getCardValue(card);


    //remove
    arr = arr.filter((item) => item !== card);
    deck[deckType] = arr;

    return {deckType, card, cardValue}
  }

  const hitForMe = () => {
    let arr = [...myCards];
    arr.push(draw())
    updateMyCards(arr)
  }

  const hitForDealer = () => {
    let arr = [...dealerCards];
    arr.push(draw())
    updateDealerCards(arr)
  }

  return (
    <Holder>
      <h1>Black Jack</h1>
      <h1>My cards</h1>
      <CardHolder cards={myCards}/>
      <button onClick={() => hitForMe()}>hitme</button>
      <h1>Dealer cards</h1>
      <CardHolder cards={dealerCards}/>
      <button onClick={() => hitForDealer()}>hitme</button>
    </Holder>
  );
}

export default Board;
