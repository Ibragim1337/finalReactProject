const root = () => {
  (
    <>
      <div id="sidebar">
        <h1>React Router Tasks</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search tasks"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New Task</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/tasks/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/tasks/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}