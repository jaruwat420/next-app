'use client';
function Input(props) {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} name={props.name} className="input input-bordered input-secondary w-full max-w-xs" onChange={props.onChange} />
        </div>
    )
}
export default Input;