export default function ProductList(props) {
    const increase = ((e) => {
        console.log(e);
    })
    return (
        <div>
            <div className="grid-items">
                <div className="card bg-base-100 w-60 h-30 shadow-xl">
                    <figure>
                        <img
                            src={props.src}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="">{props.name}</p>
                        <div className="text-center">
                            <p className="text-red-600"><span>฿</span>{props.price_promotion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
