import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import { useCallback, useEffect, useState } from 'react';
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [btnState , setBtnState] = useState(1);

  let url = `https://bobsburgers-api.herokuapp.com/characters/?limit=${limit}&skip=${skip}`;
  const limitChangeHandler = (e) => {
    setLimit(e.target.value);
    console.log(e.target.value);
  }

  const skipChangeHandler = (e) => {
    setSkip(e.target.value);
    console.log(e.target.value);
  }


  useEffect(() => {
    console.log(url);
    fetchDataHandler();
  }, [limit,skip])

  const fetchDataHandler = (event) => {
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      setCharacters(data);
    })
  }

  const buttonClickHandler = (e)=>{
    if(e.target.value === 'prev'){
      let newSkip = +skip - +limit;
      if(newSkip < 0 ){
        newSkip = 0;
      }
      setSkip(newSkip);
      setBtnState(prev => prev-1);
    }
    else{
      let newSkip = +skip + +limit;
      setSkip(newSkip);
      setBtnState(prev => prev+1);
    }
  }
  return (
    <>
      <Header setLimit = {limitChangeHandler} setSkip = {skipChangeHandler} skip={skip} limit={limit}/>
      <Items users={characters} />
      <Footer btnState = {btnState} onClick = {buttonClickHandler} />
    </>
  );
}

export default App;
