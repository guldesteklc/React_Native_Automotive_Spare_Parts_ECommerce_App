import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
 
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 30,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  }, 
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 40,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    backgroundColor: COLORS.gray,
    alignItems: "center",
  },
  searchImage:{
    resizeMode:"contain",
    width:SIZES.width -50,
    height:SIZES.height -200
  }
});

export default styles;
