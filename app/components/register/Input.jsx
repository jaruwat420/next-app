'use client';
export default function Input (props){
    return(
        <>
            <input type={props.type}  name={props.name} placeholder={props.type} className="w-full input input-bordered input-primary" />
        </>
    )
}