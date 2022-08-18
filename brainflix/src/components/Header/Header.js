import './Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <a href="../../App.js">
          <img className="header__logo"
            src={require("../../assets/Logo/BrainFlix-logo.svg").default}
            alt={"BrainFlix"}/>
        </a>
        <form className="header__form">
          <div className="header__search">
            <input className="header__search-bar" type={"text"} name="search" placeholder="         Search"/>
            <img className="header__search-avatar"src={require("../../assets/Images/Mohan-muruge.jpg")}/>
          </div>
            <button className="header__button">UPLOAD</button>
        </form>
      </header>
      

      </>
  );
}

export default Header;
