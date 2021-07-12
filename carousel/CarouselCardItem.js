import React from "react";
import { StyleSheet, Text, Dimensions, ImageBackground } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({ item, index }) => {
    return (
    <ImageBackground source={{ uri: item.image }} style={styles.container} key={index}>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.body}>{item.description}</Text>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: "white",
        borderRadius: 10,
        width: ITEM_WIDTH,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        overflow: 'hidden',
        marginVertical: 15,
    },
    header: {
        color: "#eee",
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 20,
    },
    body: {
        color: "#eee",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

export default CarouselCardItem;
