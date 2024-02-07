import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

 
const ProductCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>navigation.navigate("ProductDetails") }>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <br></br>
                    <Image
                        source={{ uri: "https://bsgautoparts.com/assets/img/on-takim-rulman.png" }}
                        style={styles.image}
/>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}> 
                    Front tool system 
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                    Steering / Suspension Parts
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        $36.00
                    </Text>
                    <br></br>
                    <br></br>
                </View> 

                <TouchableOpacity style={styles.addBtn} >
                    <Ionicons name="add-circle" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView;
