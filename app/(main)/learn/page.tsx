import FeedWrapperComponent from '@/components/feed-wrapper'
import StickyWrapperComponent from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgressComponent from '@/components/user-progress'

export default function Learn() {
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickyWrapperComponent>
                <UserProgressComponent activeCourse={{ title: "spanish", imgSrc: "/es.svg" }} hearts={5} points={100} hasActiveSubscription={false} />
            </StickyWrapperComponent>

            <FeedWrapperComponent>
                <Header title="Spanish" />
                <div className='space-y-4 '>
                    <div className='bg-sky-400 h-[400px]' />
                </div>
            </FeedWrapperComponent>
        </div>
    )
}
