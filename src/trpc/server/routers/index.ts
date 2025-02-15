import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return { name: 'News', age: 'lore' }
  }),
})

export type AppRouter = typeof appRouter
