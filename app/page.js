// import Image from "next/image";
'use client';
import React, { useState } from "react";
import Carousel from "./components/carousel/Carousel";
import ShortCategoryList from "./components/category/ShortCategoryList";
import Product from "./components/product/Product";


export default function Home() {
  const products = [{ id: 1, name: 'Product 1', price: 100, discountPrice: 80, imageUrl: 'https://res.cloudinary.com/freshketimage001/image/upload/c_fit,w_800,h_800,q_auto,f_auto/nnlwphtvrvpy7egihiau' }]
  return (
    <main>
      <Carousel />      
      <ShortCategoryList />
      <Product />
    </main>
  );
}
