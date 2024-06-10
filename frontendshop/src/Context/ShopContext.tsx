import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { ProductType } from "../types/types";

type ShopState = {
  products: ProductType[] | null;
};

type ShopActionType = { type: "set_products_list"; payload: ProductType[] };

const initialState: ShopState = {
  products: null,
};

function shopContextReducer(state: ShopState, action: ShopActionType): ShopState {
  switch (action.type) {
    case "set_products_list":
      return { ...state, products: action.payload };
    default:
      throw new Error(`Unhandled action type`);
  }
}

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
export const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useLayout must be used within a ShopProvider");
  }
  return context;
};
