import { trpc } from "./trpc";

export default async function Home() {
  const { todos } = await trpc.todos.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
        </div>
      ))}
    </main>
  );
}
