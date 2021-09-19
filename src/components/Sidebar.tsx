export const Sidebar = () => {
  return (
    <div className="wrapper text-light">
      <nav id="sidebar">
        <div className="sidebar-header">
          <div className="h1 p-3">Todo App</div>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a
              href="#"
              className="px-3 py-2 myLink"
              data-toggle="collapse"
              aria-expanded={false}
            >
              Home
            </a>
            <ul className="collapse list-unstyled">
              <li>
                <a className="px-3 py-2 myLink" href="#">
                  Completed
                </a>
              </li>

              <li>
                <a className="px-3 py-2 myLink" href="#">
                  Remaining Todos
                </a>
              </li>

              <li>
                <a className="px-3 py-2 myLink" href="#">
                  Minigames
                </a>
              </li>

              <li>
                <a className="px-3 py-2 myLink" href="#">
                  Music
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
