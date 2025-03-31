import { NavLink } from "react-router-dom"
import './MainMenu.css'
function MainMenu() {
  return (
   <ul className="list">
        <li>
            <NavLink className='nav'  to='/'>Home page </NavLink>
        </li>
        <li>
            <NavLink className='nav'  to="/products">Products</NavLink>
        </li>
        <li>
            <NavLink className='nav'  to="/products-partners">Products from partners</NavLink>
        </li>
        <li>
            <NavLink className='nav'  to="/contacts">Contacts partners</NavLink>
        </li>
   </ul>
  )
}

export default MainMenu