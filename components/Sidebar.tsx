'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'
import { useEffect, useState } from 'react'
import LoadingNav from './LoadingNav'

const Sidebar = ({ user }: SiderbarProps) => {
  const [loading, setIsLoading] = useState<boolean | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])
  return (
    <section className="sidebar">
      <LoadingNav loading={loading} />
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label} onClick={() => setIsLoading(true)}
              className={cn('sidebar-link hover:hover-effect', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        
        <PlaidLink user={user} />
      </nav>

      <Footer user={user} type='desktop'/>
    </section>
  )
}

export default Sidebar