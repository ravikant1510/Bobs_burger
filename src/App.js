import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import { useEffect} from 'react';
import Footer from "./Components/Footer/Footer";
import { cartActions } from "./store/rout";
import { useSelector,useDispatch } from "react-redux";

const App = () => {
  const limit = useSelector(state => state.limit);
  const skip = useSelector(state => state.skip);
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  const url = `https://bobsburgers-api.herokuapp.com/characters/?limit=${limit}&skip=${skip}`;
  // console.log(url);
  
  useEffect(() => {
    console.log(url);
    fetchDataHandler();
  }, [url])

  const fetchDataHandler = (event) => {
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      dispatch(cartActions.setData(data));
    })
  }

  return (
    <>
      <Header />
      <Items />
      <Footer />
    </>
  );
}

export default App;
