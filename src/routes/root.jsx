import { Outlet, Link, useLoaderData, Form, redirect,} from "react-router-dom";
import { getTasks, createTask } from "../tasks";

export async function action() {
  const task = await createTask();
  return redirect(`/tasks/${task.id}/edit`);
}

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
          <Form method="post">
            <button type="submit">New</button>
          </Form>
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
              <i>No tasks</i>
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