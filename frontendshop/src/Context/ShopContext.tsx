import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { ProductType } from "../types/types";

type ShopState = {
  products: ProductType[] | null;
  cart: ProductType[] | null;
  cartCount: number;
};

type ShopActionType =
  | { type: "set_products_list"; payload: ProductType[] }
  | { type: "add_to_cart"; payload: ProductType };

const initialState: ShopState = {
  products: null,
  cart: null,
  cartCount: 0,
};

type ShopContextType = {
  state: ShopState;
  dispatch: React.Dispatch<ShopActionType>;
};

const ShopContext = createContext<ShopContextType | null>(null);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(shopContextReducer, initialState);

  const value = { state, dispatch };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useLayout must be used within a ShopProvider");
  }
  return context;
};

function shopContextReducer(
  state: ShopState,
  action: ShopActionType
): ShopState {
  switch (action.type) {
    case "set_products_list":
      return { ...state, products: action.payload };
    case "add_to_cart": {
      const updatedCart = state.cart
        ? [...state.cart, action.payload]
        : [action.payload];
      return { ...state, cart: updatedCart, cartCount: state.cartCount + 1 };
    }
    default:
      throw new Error(`Unhandled action type`);
  }
}
