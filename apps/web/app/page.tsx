"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: "",
      title: "",
      completed: false,
    },
  ]);
  const handleSeed = async () => {
    await trpc.seed.mutate().then(() => {
      trpc.todos.query().then((data) => {
        setTodos(data.todos);
      });
    });
  };

  useEffect(() => {
    trpc.todos.query().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  console.log(todos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button onClick={handleSeed}>Seed</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
        </div>
      ))}
    </main>
  );
}
