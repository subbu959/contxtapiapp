"use client"
import React, { useMemo } from 'react';
import { useCart } from "../CartContext";

type CardProps = {
  id: number;
  name: string;
  price: number;
  img: any;
};

const Card = React.memo(({ id, name, price, img }: CardProps) => {
  const { addToCart } = useCart();
  console.log("Rendering Product:", { name });

  const memoizedProps = useMemo(() => ({
    id,
    name,
    price,
    img,
  }), [id, name, price, img]); // Only re-memoize when these values change

  return (
    <div
      key={memoizedProps.id}
      className="group relative"
      onClick={() => addToCart(memoizedProps.id, memoizedProps.name, memoizedProps.price, memoizedProps.img)}
    >
      <div className="aspect-square w-full rounded-md bg-gray-900 flex items-center justify-center group-hover:opacity-75 lg:aspect-auto lg:h-80">
        <div className="text-4xl">{memoizedProps.img}</div> {/* Display the icon here */}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {memoizedProps.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${memoizedProps.price}</p>
      </div>
    </div>
  );
});

export default Card;
