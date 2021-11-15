import './Autocomplete.css'
import React, {useState, useEffect} from "react";
import { AppContext } from '../AppContextProvider'
import Search from "../search/Search";
import searchLight from "../../pictures/icon-search-mod-noc.svg"
import loading from '../../pictures/loading-4.gif'

function Autocomplete() {

    const { isDark, search, isPress}= React.useContext (AppContext);
    const [newData, setNewData]= useState ([])
    const [searchValue, setSearch]= search
    const [press, setPress] = isPress

    useEffect (()=>{
        if (searchValue !== null ) 
          {fetch (`https://api.giphy.com/v1/gifs/search/tags?api_key=3KvPklEUBlov8VucWeKwz8v4k54K5mQ2&limit=5&q=${searchValue}`)
          .then (response => response.json())
          .then (json => {
            setNewData(json.data)
          })}
      },[searchValue])

    return (
        <div>
            {newData.length > 0 ? 
            <div className="suggestions">
            {press && searchValue !== "" ?  <img  className="charge" src={loading} alt="cargando"></img>: ""}     
            {Suggestions ({newData, setSearch, setPress})}
            </div> : []}
        </div>
    )
}

function Suggestions ({newData, setSearch, setPress}){

    const recomendation = (e)=>{
        setSearch(e.currentTarget.dataset.name)
        setPress(true)
    }
    return (
        <div>
            {newData.map ((data)=>{
                return (
                     <div
                        data-name={data.name}
                        onClick={recomendation}> 
                        <li className="line"> 
                            {""}
                            <img className="searchLight" src={searchLight}></img>
                            {data.name}
                            {""}
                         </li>
                    </div>
                )
            })  
            }
        </div> 
    )
}
export default Autocomplete

