import StudentLists from "./pages/StudentLists";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StudentLists />
          </Route>
          <Route path="/add-student">
            <AddStudent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
