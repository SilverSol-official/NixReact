import React,{Component} from "react";
import "./DeleteButtons.css"

export default class DeletetButtons extends  Component{
    render(){
        return(
            <div className="deleteContainer">
                <button className="deleteButtons" onClick={this.props.DeleteDone}>Delete done</button>
                <button className="deleteButtons" onClick={this.props.DeleteAll}>Delete all</button>
            </div>
            
        )
    }
}