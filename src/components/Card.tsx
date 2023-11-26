import { useEffect, useState } from "react";
import { CollectionData } from "../assets/types";
import star from "../assets/icons/star.svg";
import starFilled from "../assets/icons/star-filled.svg";
import type { Card } from "../assets/types";
import leftArrow from '../assets/icons/arrow-l.svg'
import rightArrow from '../assets/icons/arrow-r.svg'

interface CardProps {
  collectionData: CollectionData;
}

export default function Card({ collectionData }: CardProps) {
  const initialCards: Card[] = collectionData.cards as Card[];
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [starIcon, setStarIcon] = useState(star);
  const [cardText, setCardText] = useState(cards[currentQuestion].question);
  const [flipCardClass,setFlipCardClass] = useState('card rounded-2xl shadow-md flex p-5 cursor-pointer')

  function addToFavourite(event?: React.MouseEvent<HTMLElement>) {
    starIcon == star ? setStarIcon(starFilled) : setStarIcon(star);
  }

  function flipCard(event: React.MouseEvent<HTMLElement>) {
    const element = event.target as HTMLElement;
    if(element.tagName=='IMG' || element.tagName=='BUTTON') return
    setFlipCardClass('card rounded-2xl shadow-xl flex p-5 cursor-pointer rotate-hor-center')
    setTimeout(()=>{setFlipCardClass('card rounded-2xl shadow-xl flex p-5 cursor-pointer')},400)
    cardText == cards[currentQuestion].question
    ? setTimeout(()=>{setCardText(cards[currentQuestion].answer)},250)
    : setTimeout(()=>{setCardText(cards[currentQuestion].question)},250)
  }

  function nextQuestion() {
    if(currentQuestion<cards.length-1) {
      setCurrentQuestion(currentQuestion+1)
    }
  }
  function prevQuestion() {
    if(currentQuestion>0) {
      setCurrentQuestion(currentQuestion-1)
    }
  }

  useEffect(()=>{setCardText(cards[currentQuestion].question)},[currentQuestion])

  return (
    <div className={flipCardClass} onClick={flipCard}>
      <div className="card_inner relative w-full h-full flex justify-center items-center">
        <button onClick={addToFavourite}>
          <img
            className="absolute w-6 top-0 right-0"
            src={starIcon}
            alt="favourite"
          />
        </button>
        <p className="absolute top-3 left-1/2 rigth 1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-slate-600 font-semibold">
          {currentQuestion + 1} / {cards.length}
        </p>
        <h1 className="font-semibold text-2xl text-center text-slate-800">{cardText}</h1>
        <div className="card__buttons absolute bottom-0 w-1/3 flex justify-between">
          <button onClick={prevQuestion} className="card__arrow w-10"><img className="w-full" src={leftArrow} alt="" /></button>
          <button onClick={nextQuestion} className="card__arrow w-10"><img className="w-full" src={rightArrow} alt="" /></button>
        </div>
      </div>
    </div>
  );
}
