import { createTRPCRouter, publicProcedure } from '..'

export const movieRouter = createTRPCRouter({
  movies: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.movie.findMany({})
  }),
})
