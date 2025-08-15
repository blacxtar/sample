// app/api/trpc/[trpc]/route.ts
import { appRouter } from '@/server/routers/_app';
import { createContext } from '@/server/trpc/context';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    // Note: createContext can be a function that reads from the request (cookies/headers)
    createContext: () => createContext({ req }),
    // optional onError for logging in dev:
    onError: (err) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('tRPC error:', err);
      }
    },
  });

export { handler as GET, handler as POST };
