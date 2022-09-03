import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__logo"
            src={require("../../assets/Logo/BrainFlix-logo.svg").default}
            alt={"BrainFlix"}/>
       </Link>
          <div className="header__search">
              <div className="header__container">
                <input className="header__search-bar" type={"text"} name="search" placeholder="         Search"/>
                <img className="header__search-avatar"src={require("../../assets/Images/Mohan-muruge.jpg")} alt={"avatar"}/>
              </div>
            <Link to="/upload" className="header__button">UPLOAD</Link>
            <img className="header__search-avatar--tablet"src={require("../../assets/Images/Mohan-muruge.jpg")} alt={"avatar"}/>
          </div>
      </header>
      

      </>
  );
}

export default Header;
