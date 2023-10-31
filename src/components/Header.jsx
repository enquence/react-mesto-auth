import logo from '../images/header__logo.svg';
import {CurrentUserContext} from "../contexts/currentUser";
import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";

function Header({loggedIn, onLogout}) {

  const location = useLocation()
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место Россия"/>
      {currentUser?.email && <p className="header__user">{currentUser?.email}</p>}
      {loggedIn && <button className="header__button" onClick={onLogout}>Выйти</button>}
      {location.pathname.includes('sign-in') && <Link to='/sign-up' className="header__button">Зарегистрироваться</Link>}
      {location.pathname.includes('sign-up') && <Link to='/sign-in' className="header__button">Войти</Link>}
    </header>
  )
}

export default Header
