import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index.js';
  
const styles = StyleSheet.create({
    container:{
        width:"100%"
    }, 
    welcomeTxt: (color,top)=> ({
        fontFamily:"bold",
        fontSize:SIZES.xLarge,
        marginTop: top,
        color: color,
        marginHorizontal:SIZES.small
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:30
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.xLarge
    },
    searchBtn: {
        width: 40,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        backgroundColor: COLORS.gray,
        alignItems: "center"
     }
      

})
export default styles;
