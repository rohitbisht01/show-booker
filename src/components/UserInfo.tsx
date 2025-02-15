import React from 'react'
import { RouterOutputs } from '@/trpc/clients/types'

const UserInfo = ({ hello }: { hello: RouterOutputs['hello'] }) => {
  return <div>{hello.age}</div>
}

export default UserInfo
