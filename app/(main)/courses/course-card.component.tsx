import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    id: number
    title: string
    imgSrc: string
    onClick: (id: number) => void
    disabled?: boolean
    active?: boolean
}

function CourseCard({ id,
    title,
    imgSrc,
    onClick,
    disabled,
    active }: Props) {
    return (
        <div
            onClick={() => onClick(id)}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px] ",
                disabled && "pointer-events-none opacity-50"
            )}
        >

        </div>
    )
}

export default CourseCard