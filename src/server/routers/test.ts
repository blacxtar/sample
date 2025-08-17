// src/server/routers/test.ts
import { protectedProcedure, publicProcedure, router } from '../trpc/trpc';

export const testRouter = router({
  hello: protectedProcedure.query(({ ctx }) => {
  
    
    if (ctx.user) {
      return {
        message: `${ctx?.user?.user_metadata?.full_name}!`,
        user: ctx.user,
      };
    }
    return {
      message: 'Hello, Guest!',
    };
  }),
});
