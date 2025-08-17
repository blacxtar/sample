
import { router } from '../trpc/trpc';
import { messagesRouter } from './messages';
import { testRouter } from './test';
import { threadsRouter } from './threads';
// import { exampleRouter } from './example'; 

export const appRouter = router({

  test:testRouter,
   threads: threadsRouter,
  messages: messagesRouter,
  // add other routers: threads, messages, users, etc.
});

export type AppRouter = typeof appRouter;
