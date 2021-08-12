// import * as React from "react";
// import { render } from "react-dom";
// import { configureStore } from "redux-starter-kit";
// import { connect, Provider } from "react-redux";

// import "./App.css";

// import counterAReducer, { increment as incrementA, addFive } from "./counterA";
// import counterBReducer, { increment as incrementB, addTwo } from "./counterB";

// const store = configureStore({
//   reducer: {
//     counterA: counterAReducer,
//     counterB: counterBReducer
//   }
// });

// console.log("Initial state: ", store.getState());

// [incrementA, incrementB, addFive, addTwo].forEach(actionCreator => {
//   store.dispatch(actionCreator());
//   console.log(`After action '${actionCreator}': `, store.getState());
// });

// const mapState = state => state;

// const actionCreators = {
//   incrementA,
//   incrementB,
//   addTwo,
//   addFive
// };

// function App({ counterA, counterB, incrementA, incrementB, addTwo, addFive }) {
//   return (
//     <React.Fragment>
//       <div className="App">
//         <h1>Circular Slice Dependencies Example</h1>
//       </div>
//       <h2>Counter Values</h2>
//       <ul>
//         <li>
//           <b>Counter A</b>: {counterA}
//         </li>
//         <li>
//           <b>Counter B</b>: {counterB}
//         </li>
//       </ul>

//       <div>
//         <button onClick={() => incrementA()}>Increment A</button>
//         <button onClick={() => incrementB()}>Increment B</button>
//         <button onClick={() => addTwo()}>Add Two to Both</button>
//         <button onClick={() => addFive()}>Add Five to Both</button>
//       </div>

//       <p>
//         Notice that "Add Five" only adds to A, not B. This is caused by circular
//         imports between the <code>counterA.tsx</code> and{" "}
//         <code>counterB.tsx</code> files. When B imports <code>addFive()</code>{" "}
//         from A, A hasn't finished initializing yet, so <code>addFive()</code> is
//         still undefined.
//       </p>
//     </React.Fragment>
//   );
// }

// const ConnectedApp = connect(
//   mapState,
//   actionCreators
// )(App);

// const rootElement = document.getElementById("root");
// render(
//   <Provider store={store}>
//     <ConnectedApp />
//   </Provider>,
//   rootElement
// );
