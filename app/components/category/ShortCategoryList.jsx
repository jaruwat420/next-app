'use client';
import categoryList from "@/app/categoryList";
import Category from "./Category";
export default function ShortCategoryList() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center w-full py-2 gap-2">
                {categoryList.map((items, index) => (
                    <Category 
                        key={index}
                        name={items.name}
                        img={items.img}
                    />
                ))}                    
                </div>
            </div>            
        </>
    )
}