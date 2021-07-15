import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooksContainer from "./pages/SavedBooksContainer";
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
          <Route>
            <SavedBooksContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
