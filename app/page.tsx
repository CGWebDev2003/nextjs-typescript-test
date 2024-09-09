import { getAllTasks } from './api/getAllTasks';
import TaskForm from './components/TaskForm';
import { Task } from '@prisma/client';
import ToggleTask from './components/ToggleTask';
import DeleteButton from './components/DeleteButton';

export default async function Home() {
  const tasks:Task[] = await getAllTasks();

  return (
    <div>
      <h1>Aufgabenliste</h1>
      <TaskForm/>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <ToggleTask task={task}/>
            <label>
              {task.title}
            </label>
            <DeleteButton task={task}/>
          </li>
        ))}
      </ul>
    </div>
  );
}