import React, {Component} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import "./accordionEdit.css";
import EditIcon from '@mui/icons-material/Edit';
import PostAddIcon from "@mui/icons-material/PostAdd";



export default class AccordionEdit extends Component  {
    constructor(props){
        super(props);
        this.state={
            taskLabelNew: this.props.task.taskLabel ,
            taskDescriptionNew: this.props.task.description
        }
        this.taskLabelChange=this.taskLabelChange.bind(this);
        this.taskDescriptionChange=this.taskDescriptionChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }


    taskLabelChange(event){
        console.log(event.target.value);
        this.setState({
            taskLabelNew: event.target.value
        })
    }
    taskDescriptionChange(event){
        console.log(event.target.value);
        this.setState({
            taskDescriptionNew: event.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log("send");
        console.log(this.state.taskLabelNew);
        this.props.EditTask(this.props.id,this.state.taskLabelNew,this.state.taskDescriptionNew);

    }


render(){
    return (
            <div>
              <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                      '&:before': {
                          display: 'none',
                      }
              }} >
                <AccordionSummary
                  expandIcon={<EditIcon className="penIcon"/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="penLabel"
                >

                </AccordionSummary>
                <AccordionDetails className="editAccordion">
                    <div className="containere ">
                        <form
                            className="formHolder"
                            onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                placeholder="Your task:"
                                className="w-100e inputHoldere one"
                                onChange={this.taskLabelChange}
                                value={this.state.taskLabelNew}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className="w-100e inputHoldere two"
                                onChange={this.taskDescriptionChange}
                                value={this.state.taskDescriptionNew}
                            />
                            <button
                                type="submit"
                                className="w-100e btn-createe"
                            >
                                <PostAddIcon
                                    fontSize="small"
                                /></button>

                        </form>
                    </div>

                </AccordionDetails>
              </Accordion>

            </div>
          );
        }
}