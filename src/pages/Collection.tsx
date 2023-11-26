import { useParams } from "react-router-dom";
import Navigation from './../components/Navigation';
import type {Collection} from '../assets/types'
import Card from "../components/Card";

type Props = {
  collectionList: Collection[];
  setCollectionList: React.Dispatch<React.SetStateAction<Collection[]>>;
};

const Collection: React.FC<Props> = ({ collectionList, setCollectionList }) => {
    const { id } = useParams<{ id: string }>();

  // Проверяем, есть ли значение id или оно undefined
  if (!id) {
    return <div>Некорректный запрос: не указана коллекция</div>;
  }

  // Преобразуем id в число (если нужно)
  const parsedId = parseInt(id);

  // Находим коллекцию по переданному id
  const collectionData = collectionList.find(
    (collection) => collection.id === parsedId
  );

  if (!collectionData) {
    return <div>Коллекция не найдена</div>;
  }

  // Здесь можно использовать данные коллекции для отображения на странице
  return (
    <div>
      <Navigation></Navigation>
      <div className="collection__container flex flex-col">
        <h1 className="text-2xl mb-4 font-bold">{collectionData.name}</h1>
        {collectionList.map((collection) => {
            return (
              <Card collectionData={collectionData} key={collectionData.id}></Card>
            );
          })}
      </div>
    </div>
  );
};

export default Collection;
