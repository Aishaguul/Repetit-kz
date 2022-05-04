import './Nav.css';
import Main from './Main';
import Ostav from './Ostav';
import {Link, Routes, Route, BrowserRouter} from "react-router-dom";


const Nav = () => {
  return(
      <BrowserRouter>
          <div className='Nav'>
              <Link to="/">Главная</Link>
              <Link to="/Ostav">Оставить заявку</Link>
              <a href="#">Каталог репетиторов</a>
              <a href="#">Отзывы</a>
              <a href="#">Контакты</a>
          </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Ostav" element={<Ostav />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Nav;

