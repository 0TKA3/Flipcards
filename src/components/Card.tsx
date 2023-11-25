import { useState } from "react"
import { CollectionData } from "../assets/types"

interface CardProps {
  collectionData: CollectionData;
}

export default function Card({ collectionData }: CardProps) {
  const [cards, setCards] = useState(collectionData.cards);

  return (
    <div>
        <h1 onClick={() => console.log(collectionData)}>CLICK</h1>
    </div>
  )
}
