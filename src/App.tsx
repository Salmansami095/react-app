import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

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

// import Like from "./components/like";
// import { BsFillCalendarDateFill } from "react-icons/bs";

// function App() {
//   return (
//     <div>
//       <Like />
//     </div>
//   );
// }

// export default App;

// import Message from "./components/Message";

// function App() {
//   return (
//     <div>
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug1", fixed: false },
//     { id: 2, title: "Bug2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs([...bugs, { id: 3, title: "bug3", fixed: false }]);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// }

// export default App;

import Form from "./components/ExpenseList/Form";
import Expenselist from "./components/ExpenseList/Expenselist";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, decription: "aaa", amount: 10, category: "Utilites" },
    { id: 2, decription: "bbb", amount: 10, category: "Utilites" },
    { id: 3, decription: "ccc", amount: 10, category: "Utilites" },
    { id: 4, decription: "ddd", amount: 10, category: "Utilites" },
    { id: 5, decription: "eee", amount: 10, category: "Utilites" },
  ]);

  return (
    <div>
      <Expenselist
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
