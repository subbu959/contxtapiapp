import Card from '@/components/Card'
import React, { useMemo } from 'react'
import { products } from '@/products'
const page = () => {
  const memoizedProducts = useMemo(() => products, [products]);
  console.log("Rendering product page");
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Charts</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
          {memoizedProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(page);