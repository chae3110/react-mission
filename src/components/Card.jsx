export default function Card({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.brand}</p>
    </div>
  );
}