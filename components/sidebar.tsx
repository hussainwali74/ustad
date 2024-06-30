import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SideBarItemComponent from './sidebar-item'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
type Props = {
    className?: string
}
export default function SidebarComponent({ className }: Props) {
    return (
        <div className={cn(` lg:fixed flex  h-full  border-r-2  border-solid  lg:w-[256px]
            left-0 top-0 px-4  flex-col`, className)}>
            <Link href={'/learn'}>
                <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                    <Image src={'/mascot.svg'} alt='mascort' width={40} height={40} />
                    <h1 className='text-2xl font-extrabold text-green-500 tracking-wide'>Ustad</h1>
                </div>
            </Link>
            <div className='flex flex-col gap-y-2 flex-1'>
                <SideBarItemComponent
                    label='Learn'
                    href='/learn'
                    iconStr='/learn.svg' />
                <SideBarItemComponent
                    label='Leaderboard'
                    href='/leaderboard'
                    iconStr='/leaderboard.svg' />
                <SideBarItemComponent
                    label='Quests'
                    href='/quests'
                    iconStr='/quests.svg' />
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl='/' showName defaultOpen={false} />
                </ClerkLoaded>
            </div>
        </div>
    )
}
