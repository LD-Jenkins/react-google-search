import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav";
import SearchContainer from "./pages/SearchContainer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <SearchContainer />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <SavedBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
