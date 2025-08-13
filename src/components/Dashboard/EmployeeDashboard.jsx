import React from "react";
import { Header } from "./Other/Header";
import { TaskNumbers } from "./Other/TaskNumbers";
import { TaskList } from "../TaskList/TaskList";

export const EmployeeDashboard =(props)=>{
    console.log(props.data)
    return(
        
        <>
        <div className=" bg-[#1c1c1c] h-screen">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
        </>
    )
}