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
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>

                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>

                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-active btn-secondary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}