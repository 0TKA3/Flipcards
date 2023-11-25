import { Routes, Route } from 'react-router'
import './assets/style.scss'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Collection from './pages/Collection'
import { useState } from 'react'

export default function App() {

  const [collectionList, setCollectionList] = useState([
    {
      name: "Химия",
      cards: [{}],
      id: 1,
    },
  ]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/collections' element={<Collections collectionList={collectionList} setCollectionList={setCollectionList}/>}></Route>
        <Route path='/collections/:id' element={<Collection collectionList={collectionList} setCollectionList={setCollectionList}/>}></Route>
      </Routes>
    </div>
  )
}