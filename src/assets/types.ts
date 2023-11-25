export type Card = {
    question: string;
    answer: string;
  };

export type Collection = {
    id: number;
    name: string;
    cards: Card[];
};

export type CollectionData = {
  name: string;
  cards: object[];
  id: number;
}