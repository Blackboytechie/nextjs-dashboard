import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
        <h1>Dashboard Page</h1>
        <p><Link href={'/'}>Back To HomePage</Link></p>
    </div>
  )
}
