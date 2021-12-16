import { useState } from "react";
import Tag from "./components/Tag";
import "./index.css";

const initialNames = [
  {firstName: "Dourboum", lastName: "Bloodgranite"},
  {firstName: "Alforhomli", lastName: "Bitterhide"},
  {firstName: "Rugnak", lastName: "Ambershoulder"},
  {firstName: "Modgreat", lastName: "Graygut"},
  {firstName: "Yubroc", lastName: "Woldmace"},
]

function App() {
  const [names, setNames] = useState(initialNames);

  return (
  <div className="container">
    <h1>List of names</h1>
    {names.map((v, i) => {
      return (
        <Tag key={i} firstName={v.firstName} lastName={v.lastName}></Tag>
      )
    })}
  </div>
  );
}

export default App;


