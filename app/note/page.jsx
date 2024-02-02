'use client';
import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Card() {
    const [inputText, setInputText] = useState();
    const [items, setItems] = useState([]);


    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputText(newValue);
    }
    const addItem = () => {
        setItems((preItems) => {
            return [...preItems, inputText];
        });

    }

    return (
        <>
            <div className=" w-10/12 mx-auto mt-5">
                <div className="card bg-white ">
                    <details className="collapse bg-white shadow-lg p-5">
                        <summary className="collapse-title text-xl font-medium my-5">TO-DO-LIST</summary>
                        <div className="collapse-content space-y-2 my-5">
                            <input type="text" value={inputText} onChange={handleChange} name="Title" placeholder="Title" className="input w-full" />
                        </div>
                        <div className="">
                            <button onClick={addItem} className="btn btn-accent">ADD</button>
                        </div>
                    </details>
                </div>
            </div>

            <div className="flex flex-row mx-auto gap-5">
                {items.map((item) => (
                    <TodoItems
                        text={item}
                    />
                ))}
            </div>
        </>
    )
}