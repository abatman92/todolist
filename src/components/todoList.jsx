import React from "react";
import ListItem from "./item";
import styles from "../css/item.module.css"
import classNames from "classnames";

export default function Todo() {
    const [itemsNow, setItems] = React.useState([])
    const [timeItem, setTimeItem] = React.useState({time: ""})
    const [jobItem, setJobItem] = React.useState({job: ""})
    const addItem = () => {
        const newArr = [...itemsNow, { time: timeItem.time, job: jobItem.job, active: false}]
        newArr.sort((a,b) => a.time > b.time ? 1 : -1)
        setItems(newArr);
    }
    function removeItem(id) {
        const clearArr = itemsNow.filter((item, i) => {
            return i !== id
        })
        setItems(clearArr)
    }

    const markAsDone = (id, tm, jx, ac) => {
        let clearArr = itemsNow.filter((item, i) => {
            return i !== id
        })
        clearArr = [...clearArr, { time: tm, job: jx, active: !ac}]
        clearArr.sort((a,b) => a.time > b.time || a.job > b.job || a.active < b.active ? 1 : -1)
        setItems(clearArr)
    }

    const  returnClass = (status) => {
        return classNames(styles.box, {
            [styles.active]: status
        })
    }
    const items = itemsNow.map((item, i) => {
        return (
          <ListItem
            key={i}
            job={item.job}
            time={item.time}
            style={returnClass(item.active)}
            remove={(event) =>{
                event.stopPropagation()
                removeItem(i)
            }}
            mark={(event) => {
                event.stopPropagation();
                markAsDone(i, item.time, item.job, item.active)}}
          />
        );
    })


        return (
          <div className="inputContainer">
            <input className="input" type="time" value={timeItem.time} onChange={(event) => setTimeItem({time: `${event.target.value}`})} />
            <input className="input inputText" value={jobItem.job} onChange={(event) => setJobItem({job: `${event.target.value}`})}/>
            <button className="addBtn" onClick={addItem}>
              Добавить &#8658;
            </button>
            <div className="itemsDiv">{items}</div>
          </div>
        );
    }
