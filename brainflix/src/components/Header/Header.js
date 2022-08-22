import './Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <a href="/">
          <img className="header__logo"
            src={require("../../assets/Logo/BrainFlix-logo.svg").default}
            alt={"BrainFlix"}/>
        </a>
          <div className="header__search">
            <input className="header__search-bar" type={"text"} name="search" placeholder="         Search"/>
            <button className="header__button">UPLOAD</button>
            <img className="header__search-avatar"src={require("../../assets/Images/Mohan-muruge.jpg")} alt={"avatar"}/>
          </div>
      </header>
      

      </>
  );
}

export default Header;
