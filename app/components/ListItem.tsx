import { Task } from "@prisma/client";
import DeleteButton from "./DeleteButton";
import ToggleTask from "./ToggleTask";

export default function ListItem({ task }:{task:Task}) {
    
    
    return (
        <li key={task.id}>
            <ToggleTask task={task}/>
            <label>
              {task.title}
            </label>
            <DeleteButton task={task}/>
        </li>
    );
}