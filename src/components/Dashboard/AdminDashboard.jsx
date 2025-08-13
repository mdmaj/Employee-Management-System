import React from "react";
import { Header } from "./Other/Header";
import { CreateTask } from "./Other/CreateTask";
import { AllTask } from "./Other/AllTask";

export const AdminDashboard =(props)=>{
    
    return(
        <>
        <div className="h-screen w-full ">
            
            <Header changeUser={props.changeUser} />
            
            <CreateTask />
            <AllTask />
        </div>
        </>
    )
}