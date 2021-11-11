import React, { useState } from 'react'
import './search.css'
import boys from '../../pictures/ilustra_header.svg'
import glass from '../../pictures/icon-search-mod-noc.svg'
import { AppContext } from '../AppContextProvider'
import Autocomplete from '../autocomplete/Autocomplete'


function Search() {
  const { isDark, search, isPress }= React.useContext (AppContext);
  const [searchChange, setSearchChange]= useState ("")
  const [isDarkValue, setIsDark]=isDark
  const [searchValue, setSearch]= search
  const [press, setPress]=isPress
  
  const onSearchChange = (e)=>{
    setSearch (e.target.value)
  } 

  const onClickSearch =()=>{
    setPress (true)
  }


  const onEraser =(e)=>{
    setSearch ("")
  }

  return (
    <div>
      <div>
        <h1 
          className={` title ${ isDarkValue ? 'titleDark' : 'titleLight'}` }>
          Inspirate y busca los mejores 
          <span className="gif" > GIFS!</span>
          </h1>
        <img src={boys} alt="imagen de tres personas"></img>
      </div>
      <div>
          <div> 
            <form className="form"> 
              <div className="form">
                <div className={`border ${ isDarkValue ? 'borderDark' : 'border'}`}>
                  <input 
                      className={`input ${ isDarkValue ? 'inputDark' : 'inputLight'}` }
                      type="text"
                      placeholder="Buscar Gif"
                      onChange={onSearchChange}
                      value={searchValue === null ? "" : searchValue}
                      >
                      </input>
                      {searchValue !== null && searchValue.length > 0 ? 
                      <button
                      className={`eraser ${ isDarkValue ? 'eraser-Dark' : 'eraser-Light'} `}
                      onClick={onEraser}
                      type="button"
                      >X  
                      </button> : ("")
                      }
                </div>
                <button
                type="button"
                className="btn-glasses"
                onClick={onClickSearch}
                >
                <img src={glass} className="glass"></img>  
                </button>
              </div>
            </form>
          </div>
          <Autocomplete/>
      </div>

    </div>
  );
}

export default Search;