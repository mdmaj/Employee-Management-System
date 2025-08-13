import React from "react";

export const TaskNumbers =({data})=>{
    return(
        <>
        <div className="flex justify-between gap-5 w-screen mt-10 px-10">

            {/* first Card */}

            <div className="py-6 px-9  bg-emerald-400 rounded-xl w-[45%]">
                <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl  font-semibold">New Task</h3>
            </div>

            {/* second card */}
            <div className="py-6 px-9  bg-blue-400 rounded-xl w-[45%]">
                <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
                <h3 className="text-xl  font-semibold">Completed Task</h3>
            </div>
            {/* third card */}
            <div className="py-6 px-9  bg-cyan-400 rounded-xl w-[45%]">
                <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
                <h3 className="text-xl  font-semibold">Failed Task</h3>
            </div>
            {/* fourth card  */}
            <div className="py-6 px-9  bg-red-400 rounded-xl w-[45%]">
                <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
                <h3 className="text-xl  font-semibold">Active Task</h3>
            </div>
        </div>
        </>
    )
}