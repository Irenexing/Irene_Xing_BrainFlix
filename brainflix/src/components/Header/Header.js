import './Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <a href="http://192.168.2.11:3000">
          <img className="header__logo"
            src={require("../../assets/Logo/BrainFlix-logo.svg").default}
            alt={"BrainFlix"}/>
        </a>
        <form className="header__form">
          <div className="header__search">
            <input className="header__search-bar" type={"text"} name="search" placeholder="         Search"/>
            <img className="header__search-avatar tablet-order"src={require("../../assets/Images/Mohan-muruge.jpg")} alt={"avatar"}/>
          </div>
            <button className="header__button tablet-order">UPLOAD</button>
        </form>
      </header>
      

      </>
  );
}

export default Header;
