import React, { useMemo, useCallback } from 'react';
import { useCart } from '../CartContext';
interface ButtonProps {
    id: number;
    name: string;
    price: number;
    img: any;
};

const AddTocartButton = (

    { id, name, price, img }: ButtonProps
) => {
    const { addToCart } = useCart();
    const handleAddToCart = useCallback(() => {
        return addToCart(id, name, price, img);
    }, [addToCart]);

    return (
        <>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart

            }>Add to cart</div>
        </>
    )
}

export default AddTocartButton