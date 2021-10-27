import React from 'react'
import { PaginationFetch } from '../../pagination/PaginationFetch'

export const LatestReleases = () => {
    return (
        <>
            <PaginationFetch 
                route="now_playing"
            />
        </>
    )
}
