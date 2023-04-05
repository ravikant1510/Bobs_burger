import classes from './Item.module.css'
const Item = (props) => {
    return (
        <div className={classes.user}>
            <img src={props.data.image} alt="" height="200px" />
            <h3>{props.data.name}</h3>
            <h4>Gender : {props.data.gender}</h4>
        </div>
    );
};

export default Item;