import React from 'react'
import DetailItem from '../components/DetailItem'

const DetailScreen = ({ route }) => {
    const { params } = route;
    const { item } = params;
    return (
        <DetailItem item={item} />
    )
}

export default DetailScreen;