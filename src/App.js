import punk from "./assets/punks/1.jpg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"firstNFT"}
        traits={[{ value: 7 }]}
        img={punk}
      />
    </div>
  );
}

export default App;
