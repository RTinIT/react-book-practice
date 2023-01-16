import CardList from "./components/CardList";
import Form from "./components/Form";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="app">
      <CheckBox />
      <Form />
      <CardList />
    </div>
  );
}

export default App;
