import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newRivals.style'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from "../constants";
import ProductList from '../components/products/ProductList'
import Kaydırma from '../components/rivals/Kaydırma'

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>   
    <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30}
          color={COLORS.lightWhite} />
        </TouchableOpacity>
        <Text style={styles.heading} >Home</Text>
        </View>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Text style={styles.textty}> Genuine Parts Online Catalogs </Text>
        <ProductList/>   
        <br></br>   
        <br></br> 
        <br></br>
        <Text style={styles.baslik}>Wisper Automotive About</Text>
        <br></br>
       <Text style={styles.lorem}>
       We bring more than 180,340 types of guaranteed auto spare parts for 41 different car brands to your door with the best price advantage and the best service. 
       Renewing itself day by day with its sustainable technological infrastructure wisper_automotive.com has been serving its customers since 2014. 
       Thanks to the innovations it adds to its site every day, it develops systems where you can find parts compatible with your vehicle and control the engine.
       Online car auto parts search in Turkey
       </Text> 
       <br></br>
       <br></br> 
      <Kaydırma/> 
      <br></br> 
        <Text style={styles.end}>© Copyright 2024 - wisper_automotive.com | All Rights Reserved. </Text>
    </View>
    <br></br>
    <br></br>
    </SafeAreaView>
  );
};

export default NewRivals
