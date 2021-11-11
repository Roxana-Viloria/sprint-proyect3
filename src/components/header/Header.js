import './header.css' 
import React from 'react'
import logo from '../../pictures/logo-mobile-modo-noct.svg'
import logoDark from '../../pictures/logo-desktop.svg'
import { AppContext } from '../AppContextProvider'

function Header() {

  const { isDark }= React.useContext (AppContext);
  const [isDarkValue, setIsDark]=isDark
  
  const onClickButton =(e)=>{
      setIsDark (!isDarkValue)
  }
  
  return (
    <>
    <div>
        <div className="empty"></div>
        <div className="headerLight">
            <img src={isDarkValue ? logo : logoDark}></img>
            <button 
              type="button" 
              className= {`btn ${ isDarkValue ? 'btn-dark' : 'btn-light'}` }
              onClick={onClickButton}
              >MODO DARK
              </button>
        </div>
    </div>
    </>
  );
}

export default Header;