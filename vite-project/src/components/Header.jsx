import {UserRound} from 'lucide-react'
import LoginBox from '../utils/LoginBox'


function Header() {

  return(

    <header className="header">
      <h2 className="logo">InGame</h2>
      <input type="text" id="search" placeholder='Search'/>
      <nav className="navBar">
        <ul>
          <li><a href="#">Ínicio</a></li>
          <li><a href="#">Destaques</a></li>
          <li><a href="#">Parceiros</a></li>
          <div className="account">
            <button onClick={LoginBox}>Entrar</button>
            <UserRound className="font-bold ml-2" size={15} strokeWidth={1} absoluteStrokeWidth />
          </div>
        </ul>
      </nav>

    </header>

  )
}

export default Header;