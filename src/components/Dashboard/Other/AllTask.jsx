import { useContext } from "react";
import React from "react";
import { AuthContext } from "../../../context/AuthProvider";

export const AllTask =()=>{
    const [userData, setUserData] = useContext(AuthContext)
    return(
        <>
        <div className="bg-[#262424] p-5 rounded mt-5 h-100  ">
            <div className="bg-red-400 mb-2 py-2 px-4      flex  justify-between rounded">
            <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task</h5>
            <h5 className="text-lg font-medium w-1/5">Completed</h5>
            <h5 className="text-lg font-medium w-1/5">Failed</h5>
            </div>
            
            <div className=" overflow-auto ">
                {userData.map(function(elem, idx){
                return (
                    <>
                    <div key={idx} className="border-yellow-400 mb-2 py-2 px-4 flex justify-between rounded border-3">
                    <h2 className="text-emerald-400  text-lg font-medium w-1/5">{elem.name}</h2>
                    <h3 className="text-blue-600 w-1/5 text-lg font-medium">{elem.taskCounts.newTask}</h3>
                    <h5 className="text-yellow-400 w-1/5 text-lg font-medium">{elem.taskCounts.active}</h5>
                    <h5 className="text-emerald-600 w-1/5 text-lg font-medium"> {elem.taskCounts.completed}</h5>
                    <h5 className="text-red-600 w-1/5 text-lg font-medium">{elem.taskCounts.failed}</h5>
                    </div>
                    </>
                )
            })}
            </div>
            

        </div>
        </>
    )
}