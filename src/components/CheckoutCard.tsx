import React from 'react'

type CardProps = {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity:number;
  };
const CheckoutCard = ({ id, name, price, img, quantity }: CardProps) => {
  return (
    <div
      key={id}
      className="group relative"
    >
      <img
        src={img}
        alt={name}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  )
}

export default CheckoutCard