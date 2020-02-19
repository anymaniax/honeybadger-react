import { HoneyBadgerContext } from "@honeybadger-io/react";
import React, { useContext } from "react";

export const BuggyWithContextComponent = () => {
  const honeybadger = useContext(HoneyBadgerContext);

  const bug = () => {
    try {
      throw Error("context oops.");
    } catch (e) {
      honeybadger.notify(e);
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={bug}>Click here to trigger an error with context</button>
    </div>
  );
};

export default BuggyWithContextComponent;
