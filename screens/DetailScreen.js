import React from 'react'
import DetailItem from '../components/DetailItem'
import { useSelector } from 'react-redux'

const DetailScreen = () => {
    const item = useSelector(state => state.products.selected) || {}
    return (
        <DetailItem item={item} />
    )
}

export default DetailScreen;