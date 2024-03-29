import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'; // MaterialCommunityIcons ekledim
import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: "https://bsgautoparts.com/assets/img/on-takim-rulman.png" }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}> Front tool system</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$36.00</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9) </Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}> Description </Text>
          <Text style={styles.descText}>
            Original NGK Brand Iridium Spark Plug Set. The price is given for 4 Pieces. NGK is a quality brand that is used in the original production of many car brands.
            Original NGK Brand Iridium Spark Plug Set. The price is given for 4 Pieces. NGK is a quality brand that is used in the original production of many car brands.
            Original NGK Brand Iridium Spark Plug Set. The price is given for 4 Pieces. NGK is a quality brand that is used in the original production of many car brands.
            Original NGK Brand Iridium Spark Plug Set. The price is given for 4 Pieces. NGK is a quality brand that is used in the original production of many car brands.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Kadıköy</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>  Free Delivery  </Text>
            </View>
          </View>
        </View>

              <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                <Fontisto name="shopping-bag" size={23} color={COLORS.black} />
                </TouchableOpacity>

              </View>

      </View>
    </View>
  );
};

export default ProductDetails;
