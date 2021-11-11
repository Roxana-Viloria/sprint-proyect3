import './body.css' 
import React, { useEffect, useState } from 'react'

import { AppContext } from '../AppContextProvider'
import NotFound from '../notfound/NotFound';



function Body() {

  const { isDark, search, isPress }= React.useContext (AppContext);
  const [isDarkValue, setIsDark]=isDark
  const [searchValue, setSearch]= search
  const [press, setPress]= isPress
  const [gifs, setGifs] = useState ([])


  useEffect (()=>{

      if (press && searchValue !== "" && searchValue !== null){ 
        setTimeout (function(){
          fetch (`https://api.giphy.com/v1/gifs/search?api_key=3KvPklEUBlov8VucWeKwz8v4k54K5mQ2&limit=15&q=${searchValue}`)
        .then (response => response.json())
        .then (json => {
          setPress (false)
          setSearch ("")
          setGifs(json.data)
        })
        },1000)
        
      } else if (searchValue === "" && press){
          setPress (false)
          setSearch (null)
          setGifs([])
      }
  },[searchValue, press])
  console.log (gifs)
  return (
    <div>
        <h2 className= {` yourSearch ${ isDarkValue ? 'yourSearchDark' : 'yourSearchLight'}` }>
        {gifs.length > 0 ? "Resultados de la búsqueda" : "Realiza tu Búsqueda" }
      </h2>
      <div> 
          {gifs.length > 0 && press === true  ? "":
          (<div className= {`container ${ isDarkValue ? 'containerDark' : 'containerLight'}` }>
            {gifs.map((gif)=>(
            <GifCard 
            key={gif.id}
            id={gif.id}
            images={gif.images}
            link={gif.url}
            />
          ))}
          </div>) 
          }   
      </div>
      <div>{gifs !== [] && press === false && searchValue === "" &&  <NotFound/> }</div>
    </div>
  );
}

function GifCard(props) {
  return (
    <div key={props.id} className="gif-container">
      <a href={props.link} target="_blank">
      <img className="img" src={props.images.downsized_medium.url}/>
      </a>
    </div>
  )
}

export default Body;

