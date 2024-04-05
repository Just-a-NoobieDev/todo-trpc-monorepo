"use client";

import { useEffect, useState } from "react";
import { trpc } from "@web/app/utils/trpc";
import { Todo } from "@api/todo/todo.schema";

export default function Home() {
  const [todos, setTodos] = useState([] as Todo[]);
  const handleSeed = async () => {
    await trpc.seed.mutate().then(() => {
      trpc.todos.query().then((data) => {
        const todos = data.todos.map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt), // Convert createdAt to Date type
        }));
        setTodos(todos);
      });
    });
  };

  useEffect(() => {
    trpc.todos.query().then((data) => {
      const todos = data.todos.map((todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
      setTodos(todos);
    });
  }, []);

  console.log(todos);
  return (
    <main className="flex h-screen w-screen justify-center flex-col gap-10 items-center p-4">
      <button
        onClick={handleSeed}
        className="bg-black text-white w-[250px] py-4"
      >
        Seed
      </button>
      <div className="flex flex-wrap w-full gap-8">
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <h3>{todo.completed ? "Completed" : "Not completed"}</h3>
            <small>{todo.createdAt.toLocaleString()}</small>
          </div>
        ))}
      </div>
    </main>
  );
}
