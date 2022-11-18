import React, {Component} from "react";
import TaskList from "../TaskList/TaskList.jsx";
import data from "../../Data/TasksData";
import CreateTaskForm from "../CreateTaskForm/createTaskForm";
import FilterButton from "../FilterButtons/filterButtons";
import DeleteButtons from "../DeleteButtons/DeleteButtons";
import { v4 as uuid } from 'uuid';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data
        };
        this.Delete=this.Delete.bind(this);
        this.CreateTask=this.CreateTask.bind(this);
        this.ToggleInProgress=this.ToggleInProgress.bind(this);
        this.ToggleCompleted=this.ToggleCompleted.bind(this);
        this.EditTask=this.EditTask.bind(this);
        this.SortDone=this.SortDone.bind(this);
        this.SortAll=this.SortAll.bind(this);
        this.SortInProc=this.SortInProc.bind(this);
        this.SortDateNewTop=this.SortDateNewTop.bind(this);
        this.SortDateOldTop=this.SortDateOldTop.bind(this);
        this.DeleteDone=this.DeleteDone.bind(this);
        this.DeleteAll=this.DeleteAll.bind(this);
    }
    Delete(id){
        console.log(id);
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
            const newData = [...data.slice(0,index),...data.slice(index+1)];
            return{
                data:newData
            }
        });
    }

    HideTask(id){
        this.setState(({data})=> {
                const index = data.findIndex(elem=> elem.id === id)
                const old = data[index];
                const newItem = {...old,visible: false};
                const newData = [...data.slice(0,index),newItem,...data.slice(index+1)];
                return({
                    data:newData
                })
            }
        );
    }

    ShowTask(id){
        this.setState(({data})=> {
                const index = data.findIndex(elem=> elem.id === id)
                const old = data[index];
                const newItem = {...old,visible: true};
                const newData = [...data.slice(0,index),newItem,...data.slice(index+1)];
                return({
                    data:newData
                })
            }
        );
    }

    SortAll(){
        this.setState(({data})=> {
            for(let index=0;index<data.length;index++) {
               this.ShowTask(data[index].id);
            }}
        )
    }

     SortDateNewTop() {

         this.setState( ({data})=>{
             let flag = false;
             let newArr = data;
             let temp;
              do {
                 for (let i = 1; i < data.length; i++) {
                     flag = false;
                     if (Date.parse(newArr[i].creationDate) > Date.parse(newArr[i - 1].creationDate)) {
                         temp = newArr[i];
                         newArr[i] = newArr[i - 1];
                         newArr[i - 1] = temp;
                         flag = true;
                     }
                 }
             }while (flag === true);
             return({
                 data: newArr
             })}
     )
     }

     DeleteDone(){
         this.setState(({data})=> {
             const newData=data;
             const result=newData.filter(item => !item.completed );
             return({
                 data:result
             })
             }
         )
     }

     DeleteAll(){
         this.setState(({data})=> {
             for(let index=0;index<data.length;index++) {
                 this.Delete(data[index].id);
             }}
         )
     }

    SortDateOldTop() {
        this.setState( ({data})=>{
            let flag = false;
            let newArr = data;
            let temp;
            do {
                for (let i = 1; i < data.length; i++) {
                    flag = false;
                    if (Date.parse(newArr[i].creationDate) < Date.parse(newArr[i - 1].creationDate)) {
                        temp = newArr[i];
                        newArr[i] = newArr[i - 1];
                        newArr[i - 1] = temp;
                        flag = true;
                    }
                }
            }while (flag === true);
            return({
                data: newArr
            })}
        )
    }


    SortInProc(){
        this.setState(({data})=> {
            for(let index=0;index<data.length;index++) {
                if (!data[index].inProcess) {
                    this.HideTask(data[index].id);
                }else {
                    this.ShowTask(data[index].id);
                }
            }}
        )
    }

    SortDone(){
        this.setState(({data})=> {
                for(let index=0;index<data.length;index++) {
                    if (!data[index].completed) {
                       this.HideTask(data[index].id);
                    }else{
                        this.ShowTask(data[index].id);
                }
                }}
        )

    }



    CreateTask(taskLabelNew,taskDescriptionNew){
        const unique_id = uuid();
        this.setState(({data})=>{
            const current = new Date();
            const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
            const newTask={
                id : {unique_id},
                taskLabel:taskLabelNew,
                description:taskDescriptionNew,
                completed:false,
                inProcess:false,
                creationDate:date,
                changed:false,
                visible:true
            }
            const newData = [newTask , ...data];
            return({
                data: newData
            })

        })
    }

    EditTask(id,taskLabelNew,taskDescriptionNew){
        console.log(id);
        console.log(taskLabelNew);
        this.setState(({data})=> {

            const current = new Date();
            const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
             const index = data.findIndex(elem=> elem.id === id)
             const old = data[index];
             const newItem = {...old,taskLabel: taskLabelNew, description: taskDescriptionNew,changed:true,creationDate: date};
             const newData = [...data.slice(0,index),newItem,...data.slice(index+1)];
             return({
                data:newData
             })
            }
         )
    }

    ToggleInProgress(id){
        this.setState(({data})=> {
             const index = data.findIndex(elem=> elem.id === id)
             const old = data[index];
             const newItem = {...old,inProcess: !old.inProcess};
             const newData = [...data.slice(0,index),newItem,...data.slice(index+1)];
             return({
                data:newData
             })
            }
         )
    }

    ToggleCompleted(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id === id)
            const old = data[index];
            const newItem = {...old, completed: !old.completed, inProcess: false};
            const newData = [...data.slice(0,index),newItem,...data.slice(index+1)];
            return({
                data:newData
             })
        })
    }



    render(){
        return(
            <div>
            <CreateTaskForm
            CreateTask={this.CreateTask}/>
            <FilterButton
            SortDone={this.SortDone}
            SortAll={this.SortAll}
            SortInProc={this.SortInProc}
            SortDateNewTop={this.SortDateNewTop}
            SortDateOldTop={this.SortDateOldTop}/>
            <TaskList tasks={this.state.data}
            Delete={this.Delete}
            ToggleInProgress={this.ToggleInProgress}
            ToggleCompleted={this.ToggleCompleted}
            EditTask={this.EditTask}
            />
            <DeleteButtons
            DeleteDone={this.DeleteDone}
            DeleteAll={this.DeleteAll}/>
            </div>
        )
    }
}


