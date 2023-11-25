import { Routes, Route } from 'react-router'
import './assets/style.scss'
import Home from './pages/Home'
import Collection from './pages/Collection'

export default function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
      </Routes>
    </div>
  )
}
