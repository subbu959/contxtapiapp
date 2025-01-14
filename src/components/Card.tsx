"use client"
import React from 'react'
import { useContext } from 'react'
import CartContext from '../CartContext'

const Card = (product : any) => {
    const {addToCart} = useContext(CartContext);
    
  return (

    <div key={product.id} className="group relative"  onClick={() => addToCart(product.name,product.price,product.img)}>
              <img
                src={product.img}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                // onClick={addToCart(product.name,product.price,product.img)}
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.prop.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>

            </div>
  )
}

export default Card