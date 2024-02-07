import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Kaydırma = () => {
    const slides = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJPhbSReRuaH4h3l3RolszWmfuzjk07U78A&usqp=CAU",
        "https://bsgautoparts.com/assets/img/medya/711054400.jpg",
    ];

    const imageHeight = 200;

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

export default Kaydırma

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
        
    }
})
