import React from "react";
import BuggyComponent from "./BuggyComponent";
import BuggyWithContextComponent from "./BuggyWithContextComponent";
import GoodComponent from "./GoodComponent";

export default function App() {
  return (
    <div>
      <GoodComponent />
      <BuggyComponent />
      <BuggyWithContextComponent />
    </div>
  );
}
