import React from "react"
import "./slider.css";

const Toggle = props => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={props.toggle}
          onChange={props.toggleListHandler}
        />
        <span className="slider round" />
      </label>

     {props.toggle}
    </div>
  );
};
export default  Toggle;