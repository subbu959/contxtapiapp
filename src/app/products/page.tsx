import Card from '@/components/Card'
import React from 'react'
const products = [
  {
    id: 1,
    name: 'Basic Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',

    price: 35,

  },
  {
    id: 2,
    name: 'White Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',

    price: 35,
    color: 'White',
  },
  {
    id: 3,
    name: 'Grey Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',

    price: 35,

  },
  {
    id: 4,
    name: 'Printed Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',

    price: 35,

  },
  {
    id: 5,
    name: 'Grey Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',

    price: 35,

  },
  {
    id: 6,
    name: 'White Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',

    price: 35,

  },
  {
    id: 7,
    name: 'Printed Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',

    price: 35,

  },
  {
    id: 8,
    name: 'Black Tee',

    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',

    price: 35,

  },
]
const page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Charts</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} name={product.name} price={product.price} img={product.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page