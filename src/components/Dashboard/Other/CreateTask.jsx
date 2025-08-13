import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";



export const CreateTask =(data)=>{

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] =useState('')
    const [taskDescription, setTaskDescription]= useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] =useState('')
    const [category, setCategory] =useState('')

    const [newTask, setNewTask] =useState({})

    const submitHandler=(e)=>{
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDate,category, active:false, newTask:true, failed:false, completed:false})

        const data = userData
        
        
        data.forEach(function(elem){
            if(asignTo == elem.name){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask+1
                
            }
        })
        setUserData(data)
        console.log(data)

        
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')

    }

    return(
        <>
        <div className="flex items-start justify-center text-white">
                <div className="border-2 border-emerald-600 p-10 rounded-2xl">
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className="flex flex-col items-start justify-center">
                    <div>
                        <h3 className="text-emerald-900 text-xl font-medium mb-1">Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className="border-2 text-white border-emerald-600 rounded-sm py-1 px-3 text-sm  outline-none bg-transparent placeholder:text-gray-700" type="text" placeholder="Make a UI Design" />
                    </div>
                    <div>
                        <h3 className="text-emerald-900 text-xl font-medium mt-4 mb-1">Description</h3>
                        <textarea 
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                        className="border-2 rounded-sm border-emerald-600 py-3  text-xl text-white outline-none  placeholder:text-white  " name="" id="" cols='30' rows='3'></textarea>
                    </div>
                    <div>
                        <h3 className="text-emerald-900 text-xl font-medium mt-4 mb-1">Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className="border-2 text-white border-emerald-600 rounded-sm py-1 px-3 text-sm k outline-none bg-transparent placeholder:text-gray-700" type="date" />
                    </div>
                    <div>
                        <h3 className="text-emerald-900 text-xl font-medium mt-4 mb-1">Assign to</h3>
                        <input 
                        value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                        className="border-2 text-white border-emerald-600 rounded-sm py-1 px-3 text-sm k outline-none bg-transparent placeholder:text-gray-700" type="text" placeholder="Employee Name" />
                    </div>
                    <div>
                        <h3 className="text-emerald-900 text-xl font-medium mt-4 mb-1">Category</h3>
                        <input
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className="border-2 text-white border-emerald-600 rounded-sm py-1 px-3 text-sm k outline-none bg-transparent placeholder:text-gray-700" type="text" placeholder="design, dev, etc" />
                    </div>
                    <button className="bg-emerald-600   hover:bg-emerald-900 rounded-sm border-none py-3  text-xl text-white outline-none  placeholder:text-white mt-7 px-30">Create Task</button>
                </form>
                </div>
            </div>
        </>
    )
}