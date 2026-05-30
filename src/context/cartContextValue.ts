import { createContext } from 'react';
import type { CartContextType } from './cartTypes';

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;
