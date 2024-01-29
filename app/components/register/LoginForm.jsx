'use client';
import { useState } from "react";

export default function LoginForm() {

    const [userInput, setUserInput] = useState({
        userName: "",
        userPassword: ""
    });

    const handleChange = ((e) => {
        const { name, value } = e.target;
        setUserInput((preValue) => {
            if (name === "userName") {
                return {
                    userName: value,
                    userPassword: preValue.userPassword
                };
            } else if (name === "userPassword") {
                return {
                    userName: preValue.userName,
                    userPassword: value
                };
            }
        })

    })
    return <>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-green-500">LOGIN {userInput.userName} {userInput.userPassword}</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email </span>
                        </label>
                        <input type="text" value={userInput.userName} onChange={handleChange} name="userName" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" value={userInput.userPassword} onChange={handleChange} name="userPassword" placeholder="Enter Password"
                            className="w-full input input-bordered input-primary" />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-active btn-secondary">Login</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="container mx-auto mb-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}