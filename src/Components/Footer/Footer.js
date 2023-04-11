import classes from "./Footer.module.css";
import { useState } from "react";
const Footer = (props) => {
  const [btnState , setBtnState] = useState(1);
    // console.log(props);
    // console.log("props skip = ", props.skip);
    // console.log("props limit = ", props.limit);
  const buttonClickHandler = (e) => {
    let newSkip =0;
    if (e.target.value === "prev") {
      newSkip = +props.skip - +props.limit;
      if (newSkip < 0) {
        newSkip = 0;
      }
    //   setSkip(newSkip);
      setBtnState((prev) => prev - 1);
    } else {
      newSkip = +props.skip + +props.limit;
    //   setSkip(newSkip);
        // console.log(props.skip);
        // console.log(props.limit);
        // console.log(newSkip);
      setBtnState((prev) => prev + 1);
    }
    console.log(newSkip);
    // props.onClick({skip : newSkip});
    props.onClick(newSkip);
  };

  return (
    <div className={classes.footer}>
      {btnState > 1 && (
        <button className={classes.prev} value="prev" onClick={buttonClickHandler}>
          Prev
        </button>
      )}
      <button className={classes.next} value="next" onClick={buttonClickHandler}>
        Next
      </button>
    </div>
  );
};

export default Footer;
