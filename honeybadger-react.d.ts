declare module "@honeybadger-io/react" {
  import Honeybadger from "honeybadger-js";

  interface Props {
    honeybadger?: Honeybadger;
    children: React.ReactNode;
    ErrorComponent?: React.ReactNode | Function;
  }

  var ErrorBoundary: React.ComponentType<Props>;

  interface Config {
    debug?: boolean;
    apiKey: string;
    revision?: string;
    host?: string;
    ssl?: boolean;
    projectRoot?: string;
    environment?: string;
    component?: string;
    action?: string;
    onerror?: boolean;
    disabled?: boolean;
    maxErrors?: number;
    ignorePatterns?: RegExp[];
    async?: boolean;
  }
  type HoneyBadgerProvider = React.ComponentType<{ config: Config }>;
  export var HoneyBadgerProvider: HoneyBadgerProvider;
  type HoneyBadgerConsumer = React.Consumer<Honeybadger>;
  export var HoneyBadgerConsumer: HoneyBadgerConsumer;

  export = ErrorBoundary;
}
