import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import styles from './profile.style';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{ width: '100%' }}>
        <Image
          source={require('../assets/images/new2.jpeg')}
          style={styles.cover}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/myphoto.png')}
          style={styles.profile}
        />
        <Text style={styles.name}>Güldeste KILIÇ</Text>
        <View style={styles.loginbtn}>
          <Text style={styles.menuText}>2020507038@gmail.com   </Text>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="heart-outline"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Favories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="heart-outline"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <SimpleLineIcons
                name="bag"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Carts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <MaterialCommunityIcons
                name="cached"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}>Clear cache</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem(0.2)}>
              <AntDesign
                name="deleteuser"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}> Delete Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {}}>
            <View style={styles.menuItem(0.2)}>
              <AntDesign
                name="logout"
                color={COLORS.primary}
                size={25}
              />
              <Text style={styles.menuText}> Logout Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
