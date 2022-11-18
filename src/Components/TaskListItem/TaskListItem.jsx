import React, {Component} from "react";
import SimpleAccordion  from "../AcordionsInfo/acordionItem";
import "./taskListItem.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import FastForwardIcon from '@mui/icons-material/FastForward';
import AcordionEdit from "../AcordionsEdit/acordionEdit";


export default class TaskListItem extends Component{
    render(){
        const {Delete,ToggleInProgress,ToggleCompleted,completed,inProcess,EditTask,id,visible}=this.props;

        let progress ="btn btn-process";
        let completeClass="btn btn-check";
        let visibleClass = "containerI";
        if (completed){
            completeClass+= " checked"
        }
        if (inProcess){
            progress+=" inProgress"
        }
        if (visible == false){
            visibleClass +=" hide";
        } else {
            visibleClass += " flex";
        }

        return(

            <div className={visibleClass} >
                <button className={completeClass} onClick={ToggleCompleted}>
                    <DoneIcon
                    fontSize="large" 
                    className=""   
                    />
                </button> 
                <div className="Acordion" >
                    <SimpleAccordion task={this.props} />    
                </div>  
                    <button className={progress} onClick={ToggleInProgress}>
                        <FastForwardIcon
                        fontSize="large"  
                        />
                    </button>
                    <div className="accordion-edit">
                        <AcordionEdit task={this.props} id={id} EditTask={EditTask}/>
                    </div>


                <button className="btn btn-delete" onClick={Delete}>
                        <DeleteIcon
                            fontSize="large"
                            sx={{ color: red[500] }}
                        />
                    </button>    
            </div>
        )
    }
}

// const TaskListItem = (props) =>{
//        const label = props.taskLabel;
//         return(
//             <div//                 <SimpleAccordion  />
//             </div>
//         )
    
// }

// export default TaskListItem;

// taskLabel:"Learn react",
// description:"Learn react for Nix",
// completed:false,
// inProcess:false,
// creationDate:"10.11.2022",
// changed:true,
// changeDate:"13.11.2022"

// const TaskListItem = () =>{
//     return(
//         <div>
//             <h2>From TaskListItem</h2>
//         </div>
//     )
// }
