'use client';
import React, { useState } from 'react'

export default function RegisterForm() {
    const [inputText , setInputText] = useState({
        username: '',
        password: ''
    });
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputText(prevItems => {
            return {
                ...prevItems,
                [name]:value
            }
        })
    }
    return (
        <>
            <div className='flex justify-between mt-2'>
                <div className='flex ml-5'>
                    ย้อนกลับ
                </div>
                <div className='flex'>
                    ย้อนกลับ
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-center">
                        <h5 className="text-3xl font-bold">สมัครสมาชิกเข้าใช้งาน</h5>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">อีเมล *</span>
                                </label>
                                <input type="text" name="username" onChange={handleChange} placeholder="อีเมล" className="input input-bordered input-success w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">รหัสผ่าน *</span>
                                </label>
                                <input type="password"  name="password" onChange={handleChange} placeholder="รหัสผ่าน" className="input input-bordered input-success w-full" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-success text-white">สมัครสมาชิก</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
