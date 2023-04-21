import classes from './Header.module.css'
import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { cartActions } from '../../store/rout';

const Header = () => {
    const skip = useSelector(state => state.skip);
    const limit = useSelector(state => state.limit);
    const dispatch = useDispatch();

    const skipChangeHandler = (event)=>{
        dispatch(cartActions.setSkip(event.target.value));
    }
    
    const limitChangeHandler = (event)=>{
        dispatch(cartActions.setLimit(event.target.value));
    }

    return (
        <div className={classes.header}>
            <img src="https://bobs-burgers-api-ui.herokuapp.com/static/media/logo.fde474c9f99b4028a04f.png" alt="burger logo" />

            <div className={classes.frames}>
                <label htmlFor='skips'>skips</label>
                <input type="number" name="" id="skips" value={skip} onChange = {skipChangeHandler} />
                <label htmlFor="frame">Frams per Page</label>
                <select id="frame"  onChange={limitChangeHandler} value={limit}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
}

export default Header;