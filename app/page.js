// import Image from "next/image";
'use client';
import React, { useState } from "react";
import Carousel from "./components/carousel/Carousel";
import ShortCategoryList from "./components/category/ShortCategoryList";
import Product from "./components/product/Product";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Carousel />
      {/* <ShortCategoryList />
      <Product /> */}

    </main>
  );
}
