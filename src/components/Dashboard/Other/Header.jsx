import React, { useState } from "react";


export const Header =(props)=>{
// const [username, setUsername] =useState('')
// if(!data){
//     setUsername('Admin')
// }else{
//     setUsername(data.name)
// }

const logOutUser =()=>{
    localStorage.setItem('loggedInUser', '')
    console.log(props.changeUser)
    // window.location.reload()
    props.changeUser('')
}
    return(
        <>
        <div className="flex items-end justify-between text-white p-10">
            <h1 className="text-2xl font-medium">Hello <br /><span className="text-3xl font-semibold">username ❤️</span></h1>
            <button 
            onClick={logOutUser}
            className="bg-emerald-600 border-none text-white rounded-sm px-5 py-2 text-lg font-medium">Log Out</button>
        </div>
        </>
    )

}