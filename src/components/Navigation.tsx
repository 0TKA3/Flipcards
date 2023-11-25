import logo from '../assets/icons/logo.svg'
import star from '../assets/icons/star.svg'
import collection from '../assets/icons/collection.svg'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navigation w-full h-[70px] items-center flex justify-center">
        <div className="nav__container w-full flex justify-around items-center">
            <div className="logo flex">
                <Link to='/'><img className='nav_img w-14' src={logo} alt="#" /></Link>
            </div>
            <Link to='/collections' className="text-xl"><img className='nav_img w-14' src={collection} alt="" /></Link>
            <a href="#"><img className='nav_img w-14' src={star} alt="#" /></a>
        </div>
    </nav>
  )
}
