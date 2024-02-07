import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from "./productW.style";

const ProductW = () => {
    return (
        <TouchableOpacity onPress={() => {} }>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: "https://arabam-blog.mncdn.com/wp-content/uploads/2022/05/otomobil-markalarinin-amblemleri.jpg" }}
                        style={styles.image}
/>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ProductW
