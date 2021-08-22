import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "./TextField";

function App() {
  return (
    <div className="App">
      <TextField 
        text="hi" 
        ok
        i={1}
        fn={(string)=> string}
        obj={{f1:"string"}}
        person={{firstName: "yechen", lastName: "kim"}}
        handleChange={e => {
          
        }}
      />
    </div>
  );
}

export default App;
