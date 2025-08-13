import React, { useState } from "react";

export const Login =({handleLogin} )=>{


    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email, password)
        console.log("Email is", email)
        console.log("password is", password)

        setEmail('')
        setPassword('')
    }
    return(
        <>
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="border-2 border-emerald-600 p-20 rounded-2xl">
                <form 
                onSubmit={(e)=>{
                    submitHandler(e);
                }}
                
                
                className="flex flex-col items-center justify-center">
                    <input 
                    value ={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className="border-2 text-white border-emerald-600 rounded-full py-3 px-5 text-xl k outline-none bg-transparent placeholder:text-gray-700" type="email" placeholder="Enter your email" />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className="border-2 text-white border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-700 mt-7"  type="password" placeholder="Enter password" />
                    <button 
                    className="bg-emerald-600 rounded-full border-none py-3  text-xl text-white outline-none  placeholder:text-white mt-7 px-30" >Log in</button>
                </form>
            </div>
        </div>
        
        </>
    )
}