
import React from "react";

export default function ListItem(props) {
    return (
      <div className={props.style} onClick={props.mark}>
        <p>{props.time}</p>
        <p>{props.job}</p>
        <button onClick={props.remove}>Удалить</button>
      </div>
    );
}
