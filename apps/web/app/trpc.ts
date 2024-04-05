import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@api/trpc/trpc.router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:9090/trpc", // you should update this to use env variables
    }),
  ],
});
