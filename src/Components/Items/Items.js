import Item from "./Item";
import { useSelector } from 'react-redux';

const Items = ()=>{
    const users = useSelector(state => state.users);
    if(users === null){
        return ;
    }
    // console.log("users " + users );
    const allUsers =  users.map((item)=>( 
        <Item key ={item.id} data = {item}/>
    ));
    return (
        allUsers
    );
};
export default Items;