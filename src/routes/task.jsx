import { Form } from "react-router-dom";

export default function Task() {
  const task = {
    name: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={task.avatar}
          src={task.avatar || null}
        />
      </div>

      <div>
        <h1>
          {task.first || task.last ? (
            <>
              {task.first} {task.last}
            </>
          ) : (
            <i>No Task</i>
          )}{" "}
        </h1>

        {task.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${task.twitter}`}
            >
              {task.twitter}
            </a>
          </p>
        )}

        {task.notes && <p>{task.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}