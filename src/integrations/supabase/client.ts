'use client';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from './types';

// SSR-safe Supabase client
export const supabase = createPagesBrowserClient<Database>();
