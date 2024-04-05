import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@api/trpc/trpc.router";
import { devtoolsLink } from "trpc-client-devtools-link";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:9090/trpc", // you should update this to use env variables
    }),
    devtoolsLink({
      enabled: true,
    }),
  ],
});
