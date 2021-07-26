import React from "react";
import { View } from "react-native";
import { useSelector } from 'react-redux'
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

const CarouselCards = ({ onSelected }) => {
    const isCarousel = React.useRef(null);
    const productCategories = useSelector(state => state.categories.categories)
    const filtradoDestacado = productCategories.filter(category => category.destacado === true)

    const renderItem = ({item, index}) => <CarouselCardItem item={item} index={index} onSelected={onSelected} />

    return (
    <View>
        <Carousel
        layout="default"
        ref={isCarousel}
        data={filtradoDestacado}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        autoplay={true}
        autoplayInterval={10000}
        autoplayDelay={5000}
        loop={true}
        />
    </View>
);
};

export default CarouselCards;
