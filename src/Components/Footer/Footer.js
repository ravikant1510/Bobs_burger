import classes from './Footer.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/rout';

const Footer = (props) => {
    const dispatch = useDispatch();
    const nextClickHandler= ()=>{
        dispatch(cartActions.setNext());
    }

    const prevClickHandler= ()=>{
        dispatch(cartActions.setPrev());
    }

    return (
        <div className={classes.footer}>
            <button className={classes.prev} value="prev" onClick={prevClickHandler}>Prev</button>
            <button className={classes.next} value="next" onClick={nextClickHandler}>Next</button>
        </div>
    );
};

export default Footer;