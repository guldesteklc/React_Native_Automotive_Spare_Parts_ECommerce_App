import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants/index.js';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState(""); 

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };
 
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xLarge)}>
          {" "}
         Wisper Automotive
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {" "}
          Automotive Spare Parts
        </Text>
      </View>
      <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.searchBtn} onPress={handleSearchPress}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchText} 
            placeholder="What are you looking for? "
            onChangeText={(text) => setSearchText(text)} 
            onKeyPress={({ nativeEvent }) => console.log('Key pressed:', nativeEvent.key)}
          />
        </View>
        <TouchableOpacity onPress={handleSearchPress}>
          <Feather name="search" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default Welcome;
