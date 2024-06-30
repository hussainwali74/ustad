import MobileHeaderComponent from '@/components/mobile-header'
import SidebarComponent from '@/components/sidebar'
import React from 'react'
type Props = {
    children: React.ReactNode
}
export default function MainLayout({ children }: Props) {
    return (
        <>
            <MobileHeaderComponent />
            <SidebarComponent className='hidden lg:flex' />
            <main className='lg:pl-[256px] h-full pt-[50px] lg:pt-0'>
                {/* <div className='max-w-[1026px] mx-auto pt-6 h-full'> */}
                <div className='max-w-[1056px] mx-auto pt-6 h-full'>
                    {children}
                </div>
            </main>
        </>
    )
}
