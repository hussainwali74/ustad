'use client'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
    label: string
    iconStr: string
    href: string
}
function SideBarItemComponent({ label, iconStr, href }: Props) {
    const pathname = usePathname();

    console.log('-----------------------------------------------------')
    console.log(`href :>>`, href)
    console.log(`pathname :>>`, pathname)
    console.log('-----------------------------------------------------')

    const active = pathname == href
    return (
        <Button
            variant={active ? 'sidebarOutline' : 'sidebar'}
            className='justify-start h-[52px]'
            asChild>
            <Link href={href}>
                <Image src={iconStr} alt={label} className='mr-5' height={32} width={32} />
                {label}
            </Link>
        </Button>
    )
}

export default SideBarItemComponent