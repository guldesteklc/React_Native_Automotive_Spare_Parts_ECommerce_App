import { FlatList, Text, View } from 'react-native'
import React from 'react'
import {SIZES} from '../../constants';
import styles from "./productList.style";
import ProductW from './ProductW';

const ProductList = () => {
    const products=[1, 2, 3, 4, 5,6,7,8]
  return (
    <View style={styles.container}> 
    <FlatList
    data={products} 
    renderItem={({item})=> <ProductW/> }
    horizontal
    contentContainerStyle={{columnGap:SIZES.medium}}
    />
    </View>
  );
};

export default ProductList
