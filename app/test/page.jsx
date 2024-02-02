'use client';
import FormComponent from "../components/form/FormComponent";
function Test() {
    const addItem = () => {

    }
    return (
        <>
            <div className="w-96 mx-auto mt-5 py-5">
                <div className="bg-purple-800 text-center rounded-xl p-5">
                    <h1 className="text-white">Accounting</h1>
                </div>
                <FormComponent onAdd={addItem}/>
            </div>
        </>
    )
}
export default Test;