import Card from "./components/Card";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  return <Card product={product} />;
}

export default App;
