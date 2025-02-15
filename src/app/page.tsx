'use client'

import { trpcClient } from '@/trpc/clients/client'
// import { trpcServer } from '@/trpc/clients/server'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  // const movies = await trpcServer.movies.movies.query()
  const { data, isLoading } = trpcClient.movies.movies.useQuery()

  if (isLoading) return <>loading..</>

  return (
    <div>
      <UserButton />
      {data?.map((movie) => {
        return (
          <div key={movie.id}>
            {movie.title}
            {movie.director}
          </div>
        )
      })}
    </div>
  )
}
