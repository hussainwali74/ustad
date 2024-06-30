import React from 'react'
import MobileSidebarTriggerComponent from './mobile-sidebartrigger'

function MobileHeaderComponent() {
    return (
        <nav className='lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed w-full z-50' >
            <MobileSidebarTriggerComponent />
        </nav>
    )
}

export default MobileHeaderComponent