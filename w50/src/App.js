import Home from "./components/Home";
import Message from "./components/Message";

function App() {
  return (
  <div className="container">
    <Message greet="Hello" who="Therese"></Message>
    <Home></Home>
  </div>
  );
}

export default App;
