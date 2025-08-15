// src/utils/trpcClient.ts
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';

export function createTRPCClient() {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  });
}
