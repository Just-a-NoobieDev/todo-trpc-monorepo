import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: "Carl" });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-xl">{greeting}</h1>
    </main>
  );
}
