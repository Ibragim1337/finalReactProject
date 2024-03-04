import { Form, useLoaderData } from "react-router-dom";
import { getTask } from "../tasks";

export async function loader({ params }) {
  const task = await getTask(params.taskId);
  return { task };
}

const Task = () => {
  const { task } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <p className="taskName">Task Name: 
          {task.first || task.last ? (
            <>
              {task.first} {task.last}
            </>
          ) : (
            <i>No Task</i>
          )}{" "}
        </p>
        <br />
        <p className="taskDescription">Description: {task.notes && <span className="task-notes">{task.notes}</span>}</p>
        
      </div>
    </div>
  );
}


export default Task;