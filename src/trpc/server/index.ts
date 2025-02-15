import { auth } from '@clerk/nextjs/server'
import { initTRPC, TRPCError } from '@trpc/server'
import { prisma } from '@/db/prisma'
import { Role } from '@/utils/types'
import { authorizeUser } from './util'

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = auth()

  return {
    db: prisma,
    session,
    ...opts,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create()

export const createTRPCRouter = t.router
export const publicProcedure = t.procedure

export const protectedProcedure = (...roles: Role[]) =>
  t.procedure.use(async ({ ctx, next }) => {
    const userId = (await ctx.session).userId
    console.log('user id', userId)

    if (!userId) {
      throw new Error('User ID is required')
    }

    await authorizeUser(userId, roles)

    if (!ctx.session || !(await ctx.session).userId) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    await authorizeUser(userId, roles)

    return next({
      ctx: {
        session: { ...ctx.session },
      },
    })
  })
