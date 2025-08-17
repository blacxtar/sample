// src/server/trpc/routers/threads.ts
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc/trpc";

const threadIdInput = z.object({ id: z.string().uuid() });

export const threadsRouter = router({
  // Create a new thread for the current user
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1).max(200).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user!.id;

      const { data, error } = await ctx.supabase
        .from("threads")
        .insert({
          user_id: userId,
          title: input.title ?? "New chat",
        })
        .select("*")
        .single();

      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return data;
    }),

  // List current user's threads (newest first)
  list: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.user!.id;

    const { data, error } = await ctx.supabase
      .from("threads")
      .select("*")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false });

    if (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
    }

    return data;
  }),

  // Get a single thread (ownership enforced)
  byId: protectedProcedure
    .input(threadIdInput)
    .query(async ({ ctx, input }) => {
      const userId = ctx.user!.id;

      const { data, error } = await ctx.supabase
        .from("threads")
        .select("*")
        .eq("id", input.id)
        .eq("user_id", userId)
        .single();

      if (error?.code === "PGRST116") {
        // no rows
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return data;
    }),

  // Rename a thread
  rename: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        title: z.string().min(1).max(200),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user!.id;

      const { data, error } = await ctx.supabase
        .from("threads")
        .update({ title: input.title, updated_at: new Date().toISOString() })
        .eq("id", input.id)
        .eq("user_id", userId)
        .select("*")
        .single();

      if (error?.code === "PGRST116") {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return data;
    }),

  // Delete a thread (hard delete for simplicity)
  delete: protectedProcedure
    .input(threadIdInput)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user!.id;

      const { data, error } = await ctx.supabase
        .from("threads")
        .delete()
        .eq("id", input.id)
        .eq("user_id", userId)
        .select("id")
        .single();

      if (error?.code === "PGRST116") {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
      }

      return { id: data.id };
    }),
});
