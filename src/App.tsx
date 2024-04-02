import data from "./assets/data.json";
import "./App.css";

export default function App() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
