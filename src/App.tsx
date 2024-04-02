import data from "./assets/data.json";

export default function App() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
