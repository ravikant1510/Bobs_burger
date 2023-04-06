import { useEffect, useState } from 'react';
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [url , setUrl] = useState('')
  const [characters, setCharacters] = useState([]);
  // let skip, limit;
  const [skip , setSkip]= useState(0);
  const [limit , setLimit]= useState(10);
  function setLimitAndSkip(obj){
    
     console.log(obj);
    // if(skip !== obj.skip){
    //   obj.setSkip(obj.skip);
    //   skip = obj.skip;
    //   // console.log(skip);
    // }
    // if(limit !== obj.limit){
    //   obj.setLimit(obj.limit);
    //   limit = obj.limit;
    //   // console.log(limit);
    // }

    setSkip(obj.skip);
    setLimit(obj.limit);
    setUrl(`https://bobsburgers-api.herokuapp.com/characters/?limit=${obj.limit}&skip=${obj.skip}`);
  }

  function buttonClickHandler(obj){
    // obj.skip
    // console.log(obj);
  }
  
  const fetchDataHandler = (event) => {
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      setCharacters(data);
    })
  }

  useEffect(() => {
    fetchDataHandler();
  }, [url])

  
  
  return (
    <>
      <Header onChange = {setLimitAndSkip} />
      <Items users={characters} />
      <Footer onClick = {buttonClickHandler} limit = {limit} skip={skip}/>
    </>
  );
}

export default App;
