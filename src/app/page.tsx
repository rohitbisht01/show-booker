import UserInfo from '@/components/UserInfo'
import { trpcServer } from '@/trpc/clients/server'
import { UserButton } from '@clerk/nextjs'

export default async function Home() {
  const data = await trpcServer.hello.query()

  return (
    <div>
      Hello {data.name} = {data.age}
      <UserButton />
      <UserInfo hello={data} />
    </div>
  )
}
