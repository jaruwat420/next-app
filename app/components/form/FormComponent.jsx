'use client';
import Input from "../form/Input";
import React, { useState } from "react";
import Item from "@/app/test/Item";
function FormComponent() {
    const [inputText, setInputText] = useState({
        nameItem: '',
        amountItem: ''
    });

    const [item, setItem] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setInputText((prevInputText) => ({
            ...prevInputText,
            [name]: value
        }));
    }

    function addItem(event) {
        event.preventDefault();
        setItem((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText({
            nameItem: '',
            amountItem: ''
        });
    }

    return (
        <>
            <div className="form mt-5">
                <div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                รายการ
                            </label>
                            <Input
                                name="nameItem"
                                type="text"
                                placeholder="รายการซื้อ"
                                onChange={handleChange}
                                value={inputText.nameItem}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                จำนวนเงิน
                            </label>
                            <Input
                                name="amountItem"
                                type="number"
                                placeholder="จำนวนเงิน"
                                onChange={handleChange}
                                value={inputText.amountItem}
                            />
                        </div>
                        <div className="flex items-center justify-around">
                            <button className="btn btn-primary text-white" onClick={addItem} >เพิ่มข้อมูล</button>
                        </div>
                    </form>
                </div>
                {item.map((item, index) => (
                    <Item
                        key={index}
                        id={index}
                        name={item.nameItem}
                        price={item.amountItem}
                    />
                ))}
            </div>
        </>
    )
}
export default FormComponent;