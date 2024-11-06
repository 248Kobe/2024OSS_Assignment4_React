import pic from "./pic.jpeg";
import Component1 from "./Components/Component1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <br />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
