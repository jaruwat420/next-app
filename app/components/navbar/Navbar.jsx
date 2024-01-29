'use client';
import React from "react";
import Link from 'next/link'

function Navbar() {
    return (
        <div className="navbar shadow-sm ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>หน้าแรก</a></li>
                        <li><a>โปรโมชั่น</a></li>
                        <li>
                            <details>
                                <summary>เกี่ยวกับเรา</summary>
                                <ul className="p-2">
                                    <li><a>เป้าหมาย</a></li>
                                    <li><a>วิสัยทัศน์</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>ติดต่อเรา</a></li>
                        <li><a>ร่วมงานกับเรา</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" href="/">LOGO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>หน้าแรก</a></li>
                    <li><a>โปรโมชั่น</a></li>
                    <li>
                        <details>
                            <summary>เกี่ยวกับเรา</summary>
                            <ul className="p-2">
                                <li><a>เป้าหมาย</a></li>
                                <li><a>วิสัยทัศน์</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>ติดต่อเรา</a></li>
                    <li><a>ร่วมงานกับเรา</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-warning text-white">ตะกร้าสินค้า</a>
                <Link className="btn btn-success text-white" href="/auth/register">สมัครสมาชิก</Link>
            </div>
        </div>
    )
}
export default Navbar;