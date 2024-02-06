import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* navigation bar */}
        <div className="nav">
          <img src="/camera.png" height={40} width={30}></img>

          <button className="border-none outline-none">Home</button>
          <button className="border-none outline-none">Products</button>
          <button className="border-none outline-none">Services</button>
          <button className="border-none outline-none">Contact</button>

          <img src="/grocery-store.png" height={40} width={35}></img>
        </div>
      </div>
    </>
  );
}

export default App;
