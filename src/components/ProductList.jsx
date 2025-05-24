'use client';

import React, { useState, Suspense } from 'react';

import { Products } from './Products';
import { CategoryFilter } from './CategoryFilter';
import LoadingProducts from './LoadingProducts';

export function ProductList({ initialData, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState(initialData);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setProducts(initialData);
    } else {
      const filteredProducts = initialData.filter(
        (product) => product.category === category,
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <Suspense fallback={<LoadingProducts />}>
        <Products data={products} />
      </Suspense>
    </>
  );
}
