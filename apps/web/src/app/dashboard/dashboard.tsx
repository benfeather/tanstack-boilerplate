'use client'

import { useQuery } from '@tanstack/react-query'
import type { authClient } from '@/lib/auth-client'
import { orpc } from '@/lib/orpc-client'

export default function Dashboard({
  session,
}: {
  session: typeof authClient.$Infer.Session
}) {
  const privateData = useQuery(orpc.privateData.queryOptions())

  return (
    <>
      <h2>Dashboard Content</h2>

      <pre>{JSON.stringify(session, null, 2)}</pre>

      <p>API: {privateData.data?.message}</p>
    </>
  )
}
