'use-client';

function Item(props) {
    const { name, price } = props;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-md text-center mt-2">
            <div className="card-body rounded-xl hover:bg-red-100">
                <div className="grid grid-cols-2 ">
                    <div>{name}</div>
                    <div>{price}</div>                    
                </div>
            </div>
        </div>
    )

}
export default Item;