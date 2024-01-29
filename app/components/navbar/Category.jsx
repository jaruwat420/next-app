'use client';
import React from "react";
import Link from "next/link";

function Category(props) {
    
    return (
        <li><Link href={props.href}>{props.name}</Link></li>
    )

}
export default Category;