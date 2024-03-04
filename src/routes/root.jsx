import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { getTasks } from "../tasks";

export async function loader() {
  const tasks = await getTasks();
  return { tasks };
}

export default function Root() {

  const { tasks } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Tasks</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
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
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
        {tasks.length ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <Link to={`tasks/${task.id}`}>
                    {task.first || task.last ? (
                      <>
                        {task.first} {task.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {task.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}