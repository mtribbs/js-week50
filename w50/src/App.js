import Home from "./components/Home";
import Message from "./components/Message";
import Button from "./components/classvshooks/Button";
import BrokenButton from "./components/classvshooks/BrokenButton";

function App() {
  return (
  <div className="container">
    <BrokenButton></BrokenButton>
  </div>
  );
}

export default App;

{/* <Message greet="Hello" who="Therese"></Message>
    <Home></Home> */}