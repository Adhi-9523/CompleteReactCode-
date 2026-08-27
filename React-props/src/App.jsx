// import React from 'react'
// import Greeting from './Greeting'

// export default function App() {
//   // let name = "Roman";
//   let age = 21;
//   const skill = "Javascript";
//   const items = ["Javascript ", "Java ", "Python"];
//   return (
//     <div>
//       <h1>Welcome to props</h1>
//       <Greeting name = "Roman" age = {age} skill = {skill} items = {items}/>
//     </div>
//   )
// }




// Usestate hook
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   // let name = "Roman";
//   let[name, setName] = useState("Roman")
//   const[count, setCount] = useState(0)
//   // const [count, setCount] = useState(10);
 

  
  // for incrementing count variable
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, [count])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount(prevCount => prevCount - 1);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [count]);

//   const update = () => {
//     setName("Shield");
//   }


//   // for manual incrementing
//   const Inc = () => {
//     setCount(count+1);
//   }

//   const Dec = () => {
//     setCount(count-1);
//   }

//   const Zero = () => {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>Welcome {name}</h1>
//       <button onClick={update}>change Name</button>
//       <h1>The Count value is {count}</h1>
//       <br></br>
//       <button onClick={Inc}>Count is {count}</button>
//       <br></br>
//       <button onClick={Dec}>Decrement</button>
//       <br></br>
//       <button onClick={Zero}>Reset</button>
//     </div>
//   )
// }




// for decrementing count variable
// import { useEffect, useState } from 'react';

// export default function Counter() {
//     const [count, setCount] = useState(10);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setCount(prevCount => prevCount - 1);
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, [count]);
//     return (
//         <div>
//             <h1>The Count is {count}</h1>
//         </div>
//     );
// }




// Usememo hook
// import React, { useState, useMemo } from 'react';
// function ProductSearch() {
//   const [query, setQuery] = useState('');
//   const [count, setCount] = useState(0); // Unrelated state
//   const products = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
//   // Heavy calculation runs ONLY when `query` changes
//   const filteredProducts = useMemo(() => {
//     console.log('Filtering products...');
//     return products.filter(item => 
//       item.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query]);
//   return (
//     <div>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//         placeholder="Search..."
//       />
//       {/* Unrelated button click triggers a re-render */}
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Count: {count}
//       </button>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product}>{product}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductSearch;



// UseCallback hook
// import React, { useState, useCallback } from "react";
// const Child = React.memo(({ onClick }) => {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Child</button>;
// });
// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = useCallback(() => {
//     console.log("Hello from Child");
//   }, []);
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default App;



// UseReference hook
// import { useState, useRef } from 'react';

// export default function App() {
//   const num1 = useRef(0);
//   const [num2, setNum2] = useState(0);

//   return (
//     <div>
//       <button onClick={() => { num1.current += 1 }}>
//         {"useRef " + num1.current.toString()}
//       </button>

//       <button onClick={() => setNum2(num2 + 1)}>
//         {"useState " + num2}
//       </button>
//     </div> 
//   );
// };

// useRef Hook in React
// useRef is a React Hook used to store a value that persists between renders without causing a re-render when the value changes.

// Syntax: const ref = useRef(initialValue);
// The value is accessed using: ref.current

// 1. useRef to access a DOM element
// This is the most common beginner example.
// import { useRef } from "react";
// function App() {
//     const inputRef = useRef(null);
//     const focusInput = () => {
//         inputRef.current.focus();
//     };
//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={focusInput}>
//                 Focus Input
//             </button>
//         </div>
//     );
// }
// export default App;

// How it works:
// useRef(null)
//      ↓
// inputRef
//      ↓
// <input ref={inputRef} />
//      ↓
// inputRef.current
//      ↓
// Actual <input> DOM element
// So:
// inputRef.current.focus();
// means:
// "Get the actual input element and call its focus() method."

// 2. useRef to store a value
// import { useRef } from "react";
// function App() {
//     const countRef = useRef(0);
//     const increase = () => {
//         countRef.current++;
//         console.log(countRef.current);
//     };
//     return (
//         <button onClick={increase}>
//             Increase
//         </button>
//     );
// }
// export default App;

// Every click changes: countRef.current
// but the component does not re-render.

// useState vs useRef
// This is very important for interviews.
// useStateuseRef
// Stores data
// Stores data/reference
// Changing value causes re-render
// Changing .current does not cause re-render
// Used for UI data
// Used for DOM references or persistent values
// Access using variable
// Access using .current


// UseContext hook
// import React, { createContext, useContext } from "react";

// const UserContext = createContext();

// function App() {
//   return (
//     <UserContext.Provider value="Sathvika">
//       <Profile />
//     </UserContext.Provider>
//   );
// }

// function Profile() {
//   const username = useContext(UserContext);
//   return <h2>Welcome {username}</h2>;
// }

// export default App;


// Use Reducer hook
import { useReducer } from "react";

// 1. Initial state
const initialState = {
  count: 0
};

// 2. Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

// 3. React component
function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>UseReducer Counter</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default App;