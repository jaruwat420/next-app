
import ProductList from "./ProductList"
import products from "@/app/products";

function Product() {
    return (
        <div>
            <div className="container mx-auto bg-red-200 pt-10 p-5 rounded-xl">
                <div className="container">
                    <div className="item p-5">
                        <h2 className="text-2xl font-extrabold dark:text-dark"> 🔥 Hot Deal!</h2>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                    {products.map((items => (
                        <ProductList
                            key={items.id}
                            src={items.src}
                            name={items.name}
                            price_promotion={items.price_promotion}
                            price={items.price}
                        />
                    )))}

                </div>                
            </div>
        </div>
    )
}
export default Product