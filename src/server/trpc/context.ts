import createSupabaseClient from "@/integrations/supabase/server";

/**
 * This function is called once per tRPC request.
 * It builds the `ctx` object available in every procedure.
 */
export async function createContext(opts?: { req?: Request }) {
  const supabase = await createSupabaseClient();
  
  const { data } = await supabase.auth.getUser();
  
  const user = data?.user ?? null;

  return {
    supabase, // so you can query DB in any procedure
    user, // so you can check auth in any procedure
  };
}

// Automatically infer the context type
export type Context = Awaited<ReturnType<typeof createContext>>;
