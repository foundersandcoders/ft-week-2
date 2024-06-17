import { useShopContext } from "../Context/ShopContext";

const ShopButton = () => {
  const { state } = useShopContext();
  return (
    <button className="base-button">
      <div className="padding">{state.cartCount}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5rem"
        height="5rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.548 22.253a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m10.4 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m3.08-14.7a.682.682 0 0 0 0-.14a2.48 2.48 0 0 0-1.49-1.61a4.68 4.68 0 0 0-1.8-.28H5.228l-.79-3.2a.75.75 0 1 0-1.46.35l.94 3.78c.52 2 .94 3.76 1.3 5.43c0 .14 0 .27.08.4c.12.52.24 1.05.33 1.56c.12.74.29 1.472.51 2.19c.163.396.429.741.77 1a2.48 2.48 0 0 0 1.18.46h.91c.273.015.547.015.82 0h6.73a3.06 3.06 0 0 0 2.26-.78l.08-.08a3.67 3.67 0 0 0 .78-1.9c.16-.93.37-1.88.56-2.77a.43.43 0 0 0 0-.11c.06-.22.1-.44.15-.65c.05-.21.11-.52.17-.79c.06-.27.13-.62.17-.83a4.48 4.48 0 0 0 .31-2.03m-2.81 7a2.06 2.06 0 0 1-.43 1.11a1.44 1.44 0 0 1-.48.28a1.67 1.67 0 0 1-.66.07h-6.92a8.462 8.462 0 0 1-1.51 0a1.001 1.001 0 0 1-.43-.17a.91.91 0 0 1-.26-.29a15.438 15.438 0 0 1-.44-1.93c-.07-.37-.15-.74-.22-1.11h11.75c-.14.63-.28 1.31-.4 2.01z"
        />
      </svg>
    </button>
  );
};

export default ShopButton;
