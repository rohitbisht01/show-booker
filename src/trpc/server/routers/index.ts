import { createTRPCRouter } from '..'
import { movieRouter } from './movies'

export const appRouter = createTRPCRouter({
  movies: movieRouter,
})

export type AppRouter = typeof appRouter
