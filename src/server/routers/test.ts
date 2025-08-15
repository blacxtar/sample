// src/server/routers/test.ts
import { protectedProcedure, publicProcedure, router } from '../trpc/trpc';

export const testRouter = router({
  hello: protectedProcedure.query(({ ctx }) => {
    console.log("Test route called with ctxx :",ctx.user.user_metadata.full_name)
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
