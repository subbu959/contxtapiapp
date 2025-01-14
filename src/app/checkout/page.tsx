"use client"
import React from 'react'
import { useContext } from 'react'
import CartContext from '../../CartContext'
import Card from '@/components/Card';


const page = () => {
  const {items} = useContext(CartContext);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Charts</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item: any) => (
            // <Card key={item.id} name={item.name} price={item.price} img={item.img} />
            <h1>{item.name}</h1>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default page