import React from "react";

export const AcceptTask =({data})=>{
    return (
        <>
        <div className="h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 ml-5 p-5">
                <div className="flex justify-between items-center">
                    <h3 className="bg-green-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                    <h4 className="text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
                <p className="text-sm mt-2 text-[#3a3a3a]">{data.taskDescription}</p>

                <div className="flex justify-between mt-4 ">
                    <button className="bg-green-500 py-1 px-2 text-sm rounded-xl mr-2">Mark as Completed</button>
                    <button className="bg-red-500 py-1 px-2 text-sm rounded-xl">Mark as Failed</button>
                </div>
        </div>

        </>
    )
}