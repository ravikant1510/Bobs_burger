import classes from "./Header.module.css";
import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const limitChangeHandler = (e) => {
    setLimit(e.target.value);
  };
  const skipChangeHandler = (e) => {
    setSkip(e.target.value);
  };

  useEffect(()=>{
    // props.onChange({limit:limit , skip : skip,setLimit:setLimit , setSkip:setSkip});
    props.onChange({limit:limit , skip : skip});
  },[limit,skip])

  return (
    <div className={classes.header}>
      <img
        src="https://bobs-burgers-api-ui.herokuapp.com/static/media/logo.fde474c9f99b4028a04f.png"
        alt="burger logo"
      />

      <div className={classes.frames}>
        <label htmlFor="skips">skips</label>
        <input type="number" name="" id="skips" value={skip} onChange={skipChangeHandler}/>

        <label htmlFor="frame">Frams per Page</label>
        <select id="frame" onChange={limitChangeHandler} value={limit}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
