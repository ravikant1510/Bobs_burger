import React, {useEffect} from 'react';
import Item from "./Item";


const Items = (props)=>{
    // useEffect(()=> {
    //     console.log("items mount")
    // },[])
    const allUsers =  props.users.map((item)=>( 
        <Item key ={item.id} data = {item}/>
    ));
    return (
        allUsers
    );
};
export default Items;