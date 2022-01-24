import React from "react";

export default class ListItem extends React.Component {
    render() {
        const items = this.props.items.map((item, i) => {
            return <div key={i}>
                <p>{item.time}</p>
                <p>{item.job}</p>
            </div>
        })
        return <div className="itemsDiv">
        {items}
        </div>
    }
};
