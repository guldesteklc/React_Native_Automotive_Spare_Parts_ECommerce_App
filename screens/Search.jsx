import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import styles from './search.style';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
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
        <TouchableOpacity style={styles.searchBtn} onPress={() => console.log('Search button pressed')}>
          <Feather name="search" size={20} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
      <Image
      source={require('../assets/images/Pose23.png')}
      style={styles.searchImage}
      />
      </View>
    </SafeAreaView>
  );
}

export default Search;
 