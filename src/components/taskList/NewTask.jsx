import React from "react";

export const NewTask =({data})=>{
    return(
        <>
        <div className="h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5">
                <div className="flex justify-between items-center">
                    <h3 className="bg-blue-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                    <h4 className="text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
                <p className="text-sm mt-2 text-[#3a3a3a]">{data.taskDescription}</p>
                <div className="mt-4">
                    <button className="bg-blue-900 text-sm rounded-sm w-full py-2" >Accept Task</button>
                </div>
        </div>
        </>
    )
}