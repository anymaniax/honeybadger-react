import PropTypes from "prop-types";
import React, { Component } from "react";
import { HoneyBadgerContext } from "./HoneyBadgerContext.js";

class DefaultErrorComponent extends Component {
  render() {
    return (
      <div className="error">
        <div>An Error Occurred</div>
        <div>{this.error}</div>
        <div>{this.info}</div>
      </div>
    );
  }
}

export class HoneyBadgerErrorBoundary extends Component {
  static propTypes = {
    honeybadger: PropTypes.object,
    children: PropTypes.element,
    ErrorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
      errorOccurred: false,
      honeybadger: null
    };
  }

  componentDidMount() {
    const honeybadger = this.props.honeybadger || this.context;
    if (!honeybadger) {
      console.error("No honeybadger instance found");
      return;
    }
    this.setState({ honeybadger });
  }
  static getDerivedStateFromError(error) {
    return { errorOccurred: true, error: error };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true, error: error, info: info });
    if (this.state.honeybadger) {
      this.state.honeybadger.notify(error, { context: info });
    }
  }
  render() {
    if (this.state.errorOccurred) {
      const { ErrorComponent } = this.props;
      return ErrorComponent ? (
        React.createElement(ErrorComponent, this.state)
      ) : (
        <DefaultErrorComponent />
      );
    } else {
      return this.props.children;
    }
  }
}

HoneyBadgerErrorBoundary.contextType = HoneyBadgerContext;
