import { Component } from "react";
import { withRouter } from "react-router-dom";

// This component as been wrapped around App component in order to open every page on the top after route
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      window.location.reload();
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
