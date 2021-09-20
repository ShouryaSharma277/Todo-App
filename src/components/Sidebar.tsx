import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Music } from "./Music";

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
              <Link
                to="/"
                className="px-3 py-2 myLink"
                aria-expanded={false}
              >
                Home
              </Link>
              <ul className="list-unstyled">
                <li>
                  <Link className="px-3 py-2 myLink" to="#">
                    Completed
                  </Link>
                </li>

                <li>
                  <Link className="px-3 py-2 myLink" to="#">
                    Remaining Todos
                  </Link>
                </li>

                <li>
                  <Link className="px-3 py-2 myLink" to="#">
                    Minigames
                  </Link>
                </li>

                <li>
                  <Link className="px-3 py-2 myLink" to="/music">
                    Music
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/music">
            <Music />
          </Route>

          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
