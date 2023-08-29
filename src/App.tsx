import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

// import ListGroup from "./components/ListGroup/index";

// function App() {
//   let items = ["New York", "SAn Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
//export default App;

import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>Hello world</Alert>
//     </div>
//   );
// }

// export default App;

// {alertVisible && (
//   <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
// )}

import Button from "./components/Button";

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       <like onClick={() => {}}>My button</like>
//     </div>
//   );
// }

//export default App;
//<BsFillCalendarDateFill color="red" size="25" />

import Like from "./components/like";
import { BsFillCalendarDateFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <Like />
    </div>
  );
}

export default App;
