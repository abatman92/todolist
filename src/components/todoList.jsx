import React from "react";
import ListItem from "./item";

export default class Todo extends React.Component {
        timeInp = React.createRef()
        textInp = React.createRef()        
        addJob = () => {
            this.props.list.push({time: `${this.timeInp.current.value}`, job: `${this.textInp.current.value}`})
            this.props.list.sort((a, b) => a.time > b.time ? 1 : -1);
            console.log(this.props.list)
            this.setState(this.props.list)
        }
        
        render() {return (
            <div className="inputContainer">
                <input className="input" type="time" ref={this.timeInp} />
                <input className="input inputText" ref={this.textInp} />
                <button onClick={this.addJob.bind(this)} className="addBtn">Добавить &#8658;</button>
                <ListItem items={this.props.list} />
            </div>   
        )}
    }
