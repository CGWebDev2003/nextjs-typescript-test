"use client";

import { Task } from "@prisma/client";
import { useRouter } from 'next/navigation';

export default function ToggleTask({ task }:{task:Task}) {
    const router = useRouter();

    const toggleTask = async () => {
        try {
            const res = await fetch(`/api/tasks/${task.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(task)
            });
            router.refresh();
          } catch (error) {
            console.error('Error adding task:', error);
          }
    }
    
    return(
        <input type="checkbox" onChange={toggleTask} checked={task.completed} />  
    );
}