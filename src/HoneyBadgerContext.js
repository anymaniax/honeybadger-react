import Honeybadger from "honeybadger-js";
import React from "react";

export const HoneyBadgerContext = React.createContext(undefined);

export const HoneyBadgerProvider = ({ children, config }) => {
  const honeybadger = Honeybadger.configure(config);
  return (
    <HoneyBadgerContext.Provider value={honeybadger}>
      {children}
    </HoneyBadgerContext.Provider>
  );
};

export const HoneyBadgerConsumer = HoneyBadgerContext.Consumer;
