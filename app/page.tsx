import { getAllTasks } from './api/getAllTasks';
import ListItem from './components/ListItem';
import TaskForm from './components/TaskForm';
import { Task } from '@prisma/client';

export default async function Home() {
  const tasks:Task[] = await getAllTasks();

  return (
    <div>
      <h1>Aufgabenliste</h1>
      <TaskForm/>
      <ul>
        {tasks.map((task) => (
          <ListItem task={task}/>
        ))}
      </ul>
    </div>
  );
}