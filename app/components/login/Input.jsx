
export default function Input (props){
    return (
        <>
            <input type={props.type} name="userName" placeholder={props.placeholder} className="w-full input input-bordered input-primary" />
        </>
    )
}