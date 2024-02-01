export default function ProductList(props) {
    return (
        <div>
            <div className="grid-items">
                <div className="card bg-base-100 w-48 h-29 shadow-xl">
                    <div className="flex justify-center">
                        <img
                            className="rounded-xl"
                            src={props.src}
                            alt="Shoes" />
                    </div>
                    <div className="card-body py-0 w-30">
                        <blockquote>{props.name}</blockquote>
                        <div className="text-center">
                            <p className="text-red-600"><span>฿</span>{props.price_promotion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
