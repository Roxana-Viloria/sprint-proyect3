import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Body from './components/body/Body';
import { AppContext }from './components/AppContextProvider';


  
function App() {
  const { isDark, search }= React.useContext (AppContext);
  const [isDarkValue, setIsDark]=isDark


  return (
      <div className={`App ${ isDarkValue ? 'AppDark' : 'App'}` } >
        <Header/>
        <Search/>
        <Body/>
      </div>
  );
}

export default App;
