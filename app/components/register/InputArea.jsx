'use client';

function InputArea(props) {
    const [inputTexts, setInputTexts] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputTexts(newValue);
    }


    return (
        <div>
            <input onChange={handleInput} type="text" value={inputTexts} className="w-90 input input-bordered input-primary" />
            
            <button  onClick ={() => {
                props.onAdd(inputTexts);
                setInputTexts("")
            } } className="btn btn-success ml-2 w-20">ADD</button>
        </div>
    )
}

export default InputArea;