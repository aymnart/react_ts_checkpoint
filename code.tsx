import React from "react";

let name: string = "aymen";
const Greeting = (name) => {
  return <div>Hello, {name}!</div>;
};

Greeting(name);
export default Greeting;
