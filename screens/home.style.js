// home.style.js
import { StyleSheet } from "react-native-web";
import { COLORS, SIZES } from '../constants/index';

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 50,
  },
  appBarWrapper: {
    marginHorizontal: 15,
    marginTop: SIZES.small,
  },
  appBar: { 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location:{
    fontFamily:"semibold",
    fontSize:SIZES.medium,
    color:COLORS.gary,
  }, 
  cartCount:{
    position:"absolute",
    bottom:16,
    width:16,
    height:16,
    borderRadius:5,
    alignItems:"center",
    backgroundColor:"green",
    justifyContent:"center",
    zIndex:996
  },
  cartNumber:{
    fontFamily:"regular",
    fontWeight:"600",
    fontSize:15,
    color:COLORS.lightWhite,
  },


});

export default styles;
