import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";
import "./TaskList.css"

const TaskList = ({tasks,Delete,ToggleInProgress,ToggleCompleted,EditTask}) => {
    const elements = tasks.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id}>
                <TaskListItem
                {...itemProps}
                id={id}
                Delete={()=>Delete(id)}
                ToggleCompleted={()=>ToggleCompleted(id)}
                ToggleInProgress={()=>ToggleInProgress(id)}
                EditTask={EditTask}
                />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )


}

export default TaskList;