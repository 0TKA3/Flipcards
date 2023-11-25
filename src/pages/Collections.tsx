import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import {Collection} from '../assets/types'

type Props = {
  collectionList: Collection[];
  setCollectionList: React.Dispatch<React.SetStateAction<Collection[]>>;
};

const Collections: React.FC<Props> = ({ collectionList, setCollectionList }) => {
  return (
    <>
      <Navigation />
      <div className="collections__grid">
        {collectionList.map((collection) => {
          return (
            <Link to={'/collections/' + collection.id} className="collection flex justify-center items-center" key={collection.id}>
              <h1 className="text-2xl font-bold">{collection.name}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Collections;
