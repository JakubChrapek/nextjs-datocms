import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

export default function Navigation() {
  const router = useRouter();
  console.log(router);
  return (
    <ul class="container flex justify-end align-center mx-auto py-6 px-5">
      <li class="mr-10"><Link class={cn('test', {"active": router.path==="/blog"})} href="/">Home</Link></li>
      <li class="mr-10"><Link href="/about">About</Link></li>
      <li class="mr-10"><Link href="/blog">Blog</Link></li>
      <li class="mr-10"><Link href="/services">Services</Link></li>
      <li class=""><Link href="/offer">Offer</Link></li>
    </ul>
  )
}
