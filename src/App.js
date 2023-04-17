import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import { useEffect, useState, createContext } from "react";
import Footer from "./Components/Footer/Footer";

// creating context 
const SkipAndLimit = createContext(null);


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [btnState, setBtnState] = useState(1);


  let url = `https://bobsburgers-api.herokuapp.com/characters/?limit=${limit}&skip=${skip}`;
  const limitChangeHandler = (e) => {
    setLimit(e.target.value);
    console.log(e.target.value);
  };

  const skipChangeHandler = (e) => {
    setSkip(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    console.log(url);
    fetchDataHandler();
  }, [limit, skip]);

  const fetchDataHandler = (event) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
      });
  };

  const buttonClickHandler = (e) => {
    if (e.target.value === "prev") {
      let newSkip = +skip - +limit;
      if (newSkip < 0) {
        newSkip = 0;
      }
      setSkip(newSkip);
      setBtnState((prev) => prev - 1);
    } else {
      let newSkip = +skip + +limit;
      setSkip(newSkip);
      setBtnState((prev) => prev + 1);
    }
  };
  return (
    // provider value main jo jo pass krne hai pass kr do
    <SkipAndLimit.Provider value={{skip, limit,skipChangeHandler,limitChangeHandler}} >
      <Header/>
      <Items users={characters} />
      <Footer btnState={btnState} onClick={buttonClickHandler} />
    </SkipAndLimit.Provider>
  );
};

// export kr do and fir vha pr import kr do
export {SkipAndLimit};

export default App;
