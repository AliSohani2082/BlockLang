import {TbPrompt} from 'react-icons/tb';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <TbPrompt size={30} className='logo'/>
      <div className='header_container'>
        <Link to="/"><span>Home</span></Link>
        <Link to="/"><span>Contact Us</span></Link>
        <Link to="/"><span>Terms of service</span></Link>
      </div>
    </div>
  )
}

export default Header