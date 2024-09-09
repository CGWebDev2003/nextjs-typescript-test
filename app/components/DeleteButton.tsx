"use client";

import { Task } from "@prisma/client";
import { useRouter } from 'next/navigation';

export default function DeleteButton({ task }:{task:Task}) {
    const router = useRouter();

    const deleteTask = async () => {
        console.log("Pressed Delete Button");
        try {
            const res = await fetch(`/api/tasks/${task.id}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(task)
            });
            router.refresh();
          } catch (error) {
            console.error('Error adding task:', error);
          }
    }
    
    return(
        <button onClick={deleteTask}>
            <i className="bi bi-trash"></i>
        </button> 
    );
}