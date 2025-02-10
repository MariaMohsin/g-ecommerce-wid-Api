import React, { Suspense } from "react";
import SecondaryNavbar from "../components/Navbar";
import { getAllProducts } from "@/sanity/lib/data";
import ProductList from "../components/ProductList";
import PriceRangeFilter from "../components/PriceRangeFilter";


const ProductPage = async () => {
  const products = await getAllProducts() || []; 

  return (
    <div className="min-h-screen bg-gray-50">
      <SecondaryNavbar />
      <ProductList products={products} /> 
      <PriceRangeFilter/>
      
    </div>
  );
};

export default ProductPage;