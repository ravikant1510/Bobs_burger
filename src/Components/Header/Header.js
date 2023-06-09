import classes from './Header.module.css'
import React, {useState} from 'react';
const Header = (props) => {
    
    
    return (
        <div className={classes.header}>
            <img src="https://bobs-burgers-api-ui.herokuapp.com/static/media/logo.fde474c9f99b4028a04f.png" alt="burger logo" />

            <div className={classes.frames}>
                <label htmlFor='skips'>skips</label>
                <input type="number" name="" id="skips" value={props.skip} onChange = {props.setSkip} />
                <label htmlFor="frame">Frams per Page</label>
                <select id="frame"  onChange={props.setLimit} value={props.limit}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
}

export default Header;