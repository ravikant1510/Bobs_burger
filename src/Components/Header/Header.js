import classes from './Header.module.css'
import React, {useContext} from 'react';

// importing 
import { SkipAndLimit } from '../../App';

const Header = (props) => {
    // vo sab yha access kr rhe hai
    const {skip, limit,skipChangeHandler:setSkip,limitChangeHandler:setLimit} = useContext(SkipAndLimit);
    return (
        <div className={classes.header}>
            <img src="https://bobs-burgers-api-ui.herokuapp.com/static/media/logo.fde474c9f99b4028a04f.png" alt="burger logo" />

            <div className={classes.frames}>
                <label htmlFor='skips'>skips</label>
                <input type="number" name="" id="skips" value={skip} onChange = {setSkip} />
                <label htmlFor="frame">Frams per Page</label>
                <select id="frame"  onChange={setLimit} value={limit}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
}

export default Header;