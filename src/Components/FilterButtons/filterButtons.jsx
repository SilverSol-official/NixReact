import React, {Component} from "react";
import "./filterButton.css"
export default class FilterButton extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="searchContainer">
                <button className="searchButtons" onClick={this.props.SortAll}>All</button>
                <button className="searchButtons" onClick={this.props.SortDone}>Done</button>
                <button className="searchButtons" onClick={this.props.SortInProc}>In process</button>
                <button className="searchButtons" onClick={this.props.SortDateNewTop}>New to top</button>
                <button className="searchButtons" onClick={this.props.SortDateOldTop}>Old to top</button>
            </div>
        )
    }
}
