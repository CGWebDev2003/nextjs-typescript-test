"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TaskForm() {
    const router = useRouter();
    const [newTask, setNewTask] = useState<string>('');

    const addTask = async () => {
        try {
          const res = await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTask }),
          });
          setNewTask('');
          router.refresh();
        } catch (error) {
          console.error('Error adding task:', error);
        }
    };

    return(
        <>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Neue Aufgabe..."/>
            <button onClick={addTask}>Hinzufügen</button>
        </>
    );
}