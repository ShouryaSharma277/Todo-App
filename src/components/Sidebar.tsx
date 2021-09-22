import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Music } from "./Music";
import { Todo } from "./home/Todo";
import { AddTodos } from "./home/AddTodos";

export const Sidebar = () => {
  return (
    <div className="wrapper text-light">
      <Router>
        <nav id="sidebar">
          <div className="sidebar-header">
            <div className="h1 p-3">Todo App</div>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <Link to="/" className="px-3 py-2 myLink" aria-expanded={false}>
                Home
              </Link>
              <ul className="list-unstyled">
                <li>
                  <Link className="px-3 py-2 myLink" to="/music">
                    Music
                  </Link>
                </li>
                <li>
                  <Link className="px-3 py-2 myLink" to="/minigames">
                    Minigames
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Todo}></Route>
          <Route exact path="/music" component={Music}></Route>
        </Switch>
      </Router>
    </div>
  );
};
