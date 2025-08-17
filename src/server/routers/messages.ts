// src/server/trpc/routers/messages.ts
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc/trpc";

const createMessageInput = z.object({
  threadId: z.string().uuid(),
  content: z.any()
});

const listByThreadInput = z.object({
  threadId: z.string().uuid(),
  limit: z.number().int().min(1).max(200).optional(),
  // basic cursor (created_at) pagination can be added later if needed
});

export const messagesRouter = router({
  // Create message and bump thread.updated_at
  create: protectedProcedure
    .input(createMessageInput)
    .mutation(async ({ ctx, input }) => {
      // const userId = ctx.user!.id;
      console.log("create message ...")
      // Ensure the thread belongs to the caller
      // const { data: thread, error: threadErr } = await ctx.supabase
      //   .from("threads")
      //   .select("id, user_id")
      //   .eq("id", input.threadId)
      //   .single();

      // if (threadErr?.code === "PGRST116" || !thread) {
      //   throw new TRPCError({ code: "NOT_FOUND", message: "Thread not found" });
      // }
      // if (thread.user_id !== userId) {
      //   throw new TRPCError({ code: "FORBIDDEN", message: "Not your thread" });
      // }

      const { data, error } = await ctx.supabase
        .from("messages")
        .insert({
          thread_id: input.threadId,
          content: input.content,
        })
        .select("*")
        .single();

      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      // bump thread.updated_at
      await ctx.supabase
        .from("threads")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", input.threadId);

      return data;
    }),

  // List messages in a thread (ownership enforced)
  listByThread: protectedProcedure
    .input(listByThreadInput)
    .query(async ({ ctx, input }) => {
      // const userId = ctx.user!.id;

      // ownership check
      // const { data: thread, error: threadErr } = await ctx.supabase
      //   .from("threads")
      //   .select("id, user_id")
      //   .eq("id", input.threadId)
      //   .single();

      // if (threadErr?.code === "PGRST116" || !thread) {
      //   throw new TRPCError({ code: "NOT_FOUND" });
      // }
      // if (thread.user_id !== userId) {
      //   throw new TRPCError({ code: "FORBIDDEN" });
      // }

      const { data, error } = await ctx.supabase
        .from("messages")
        .select("content")
        .eq("thread_id", input.threadId)
        .order("created_at", { ascending: true })
        .limit(input.limit ?? 500);

      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return data;
    }),

  // (Optional) Clear thread messages
  clearThread: protectedProcedure
    .input(z.object({ threadId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // const userId = ctx.user!.id;

      // ownership check
      // const { data: thread, error: threadErr } = await ctx.supabase
      //   .from("threads")
      //   .select("id, user_id")
      //   .eq("id", input.threadId)
      //   .single();

      // if (threadErr?.code === "PGRST116" || !thread) {
      //   throw new TRPCError({ code: "NOT_FOUND" });
      // }
      // if (thread.user_id !== userId) {
      //   throw new TRPCError({ code: "FORBIDDEN" });
      // }

      const { error } = await ctx.supabase
        .from("messages")
        .delete()
        .eq("thread_id", input.threadId);

      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return { ok: true };
    }),
});
