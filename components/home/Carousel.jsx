import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://bsgautoparts.com/assets/img/slide/2091573177.jpg",
        "https://bsgautoparts.com/assets/img/slide/1975960501.jpg",
    ];

    const imageHeight = 215;

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 25, width: "98%", height: imageHeight, marginTop: 5}}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
        
    }
})
