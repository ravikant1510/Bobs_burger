import { Button, Space } from 'antd';
import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            {props.btnState > 1 && <button className={classes.prev} value="prev" onClick={props.onClick}>Prev</button>}
            <button className={classes.next} value="next" onClick={props.onClick}>Next</button>
            {/* <Button >Prev</Button>
            <Button>Next</Button> */}
        </div>
    );
};

export default Footer;