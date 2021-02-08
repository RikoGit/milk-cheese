import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "../Main/index.jsx";
import store from "../../store.js";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  );
};

export default App;
