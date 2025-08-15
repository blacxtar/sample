
import { router } from '../trpc/trpc';
import { testRouter } from './test';
// import { exampleRouter } from './example'; 

export const appRouter = router({

  test:testRouter
  // add other routers: threads, messages, users, etc.
});

export type AppRouter = typeof appRouter;
