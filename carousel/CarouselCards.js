import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { CATEGORIES } from "../services/categories";

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    return (
    <View>
        <Carousel
        layout="default"
        ref={isCarousel}
        data={CATEGORIES}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        autoplay={true}
        autoplayInterval={10000}
        autoplayDelay={5000}
        loop={true}
        />
        <Pagination
        dotsLength={CATEGORIES.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        containerStyle={{
            height: 61,
            marginTop: -20,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
    />
    </View>
);
};

export default CarouselCards;
