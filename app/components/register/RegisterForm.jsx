'use client';
import { useState } from "react";
import React from "react";
import { ReactDOM } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";

export default function RegisterForm(props) {
    const now = new Date().toLocaleTimeString();

    const [count, setCount] = useState(0)
    const [time, SetTime] = useState(now);
    const [fullInput, SetFullInput] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        SetFullInput((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
            console.log(preValue);
        })

    }
    const handleSubmit = (() => {

    })
    const updateTime = (() => {
        const time = new Date().toLocaleTimeString();
        SetTime(time);
    })

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleInput(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }
    setInterval(updateTime, 1000);

    return <>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-green-500">Register </h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email </span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Username"
                            name="UserName"
                            value={fullInput.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <Input
                            type="password"
                            placeholder="Password"
                            name="Password"
                            value={fullInput.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <Input
                            type="password"
                            placeholder="confirm password"
                            name="ConfirmPassword"
                            value={fullInput.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-active btn-secondary">Register</button>
                    </div>
                </form>
            </div>
            <div className="w-96 p-6 m-auto rounded-md shadow-md lg:max-w-lg mt-5">
                <h1 className="text-3xl font-semibold text-center text-blue-500">{time}</h1>
                <div className="flex flex-row justify-center gap-5 mt-5">

                    <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>-</button>
                    <h1 className="text-3xl font-semibold text-center text-green-500">{count}</h1>
                    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="flex flex-col mt-2">
                    <button className="btn w-80" onClick={updateTime}>UPDATE</button>
                </div>
            </div>
            <div className="w-96 p-6 m-auto rounded-md shadow-md lg:max-w-lg mt-5">
                <h1 className="text-center mb-5">hello World</h1>
                <div className="">
                    <input type="text" className="w-90 input input-bordered input-primary" value={inputText} onChange={handleInput} />
                    <button className="btn btn-primary ml-2 w-20" onClick={addItem}>AddItem</button>
                </div>
                <div className="flex flex-row justify-center mt-5 mb-5">
                    <ul>
                        {items.map((todoItems, index) => (
                            <TodoItem
                                key={index}
                                id={index}
                                text={todoItems}
                                onChecked={deleteItem}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
}