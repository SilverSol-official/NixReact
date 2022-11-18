import React , {Component} from "react";
import "./CreateTaskForm.css"
import PostAddIcon from '@mui/icons-material/PostAdd';



export default class CreateTaskForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            taskLabelChange: "",
            taskDescriptionChange:""
        }
        this.taskLabelChange=this.taskLabelChange.bind(this);
        this.taskDescriptionChange=this.taskDescriptionChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    taskLabelChange(event){
        console.log(event.target.value);
        this.setState({
            taskLabelChange: event.target.value
        })
    }
    taskDescriptionChange(event){
        console.log(event.target.value);
        this.setState({
            taskDescriptionChange: event.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.CreateTask(this.state.taskLabelChange, this.state.taskDescriptionChange)
        this.setState({
            taskLabelChange: "",
            taskDescriptionChange: ""
        })
    }

    render(){
        
        return (
            <div className="container ">
                    <form 
                        className="formHolder"
                        onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Your task:"
                    className="w-100 inputHolder"
                    onChange={this.taskLabelChange}
                    value={this.state.taskLabelChange}
                    />
                <input
                    type="text"
                    placeholder="Description" 
                    className="w-100 inputHolder"
                    onChange={this.taskDescriptionChange}
                    value={this.state.taskDescriptionChange}
                    />
                <button
                    type="submit"
                    className="w-100 btn-create"
                    >
                    <PostAddIcon 
                            fontSize="large"
                        /></button>
                </form>
            </div>
        );
    }
}

