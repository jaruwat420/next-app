function TodoItems(props) {
    return (
        <div div className="card w-96 bg-base-100 shadow-xl mt-5" >
            <div className="card-body">
                <p>{props.text}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">DEL</button>
                </div>
            </div>
        </div>
    )
}
export default TodoItems;