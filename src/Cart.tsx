import type { ItemCartType } from "./PropsType";

export default function Cart({ itemCount }: ItemCartType) {
  return (
    <div>
      <h1>Cart</h1>
      <p>Items: {itemCount}</p>
      {itemCount > 0 && <button>Checkout</button>}
    </div>
  );
}