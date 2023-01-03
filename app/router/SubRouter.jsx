import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NewsPage from "../containers/NewsPage";
export default class SubRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={NewsPage} />
      </Switch>
    );
  }
}
