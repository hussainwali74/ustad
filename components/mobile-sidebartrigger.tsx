import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import SidebarComponent from './sidebar'

function MobileSidebarTriggerComponent() {
    return (
        <Sheet >
            <SheetTitle className='hidden'>Ego the planet</SheetTitle>
            <SheetTrigger>
                <Menu className='text-white' />
            </SheetTrigger>
            <SheetContent className='p-0 z-[100]' side={'left'}>
                <SidebarComponent />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebarTriggerComponent