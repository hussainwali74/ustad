import React from 'react'
type Props = {
    children: React.ReactNode
}
function FeedWrapperComponent({ children }: Props) {
    return (
        <div className='flex-1 relative top-0 pb-10'>{children}

        </div>
    )
}

export default FeedWrapperComponent