import React from "react";
import { View } from "react-native";
import { useSelector } from 'react-redux'
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

const CarouselCards = () => {
    const isCarousel = React.useRef(null);
    const productCategories = useSelector(state => state.categories.categories)


    return (
    <View>
        <Carousel
        layout="default"
        ref={isCarousel}
        data={productCategories}
        renderItem={CarouselCardItem}
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
