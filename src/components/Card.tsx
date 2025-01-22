"use client";
import React, { useMemo, useCallback } from 'react';

import AddToCart from './addTocartButton';
interface CardProps {
  id: number;
  name: string;
  price: number;
  img: any;
};


const Card = React.memo(({ id, name, price, img }: CardProps) => {

  console.log("Rendering Product:", { name });

  const memoizedProps = useMemo(() => ({ id, name, price, img }), [id, name, price, img]);



  return (
    < div  className='flex flex-col' >
      <div
        key={memoizedProps.id}
        className="group relative bg-white rounded-lg shadow-lg overflow-hidden "
      // onClick={handleAddToCart}
      >
        <div className="aspect-square w-full rounded-md bg-gray-900 flex items-center justify-center  lg:aspect-auto lg:h-80">
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
      <div
      className='mt-2'
      >
      <AddToCart id={memoizedProps.id} name={memoizedProps.name} price={memoizedProps.price} img={memoizedProps.img} />

      </div>
    </div>
  );
});
export default Card;