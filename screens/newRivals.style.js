import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../constants/index';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    upperRow:{
        width:SIZES.width -50,
        marginHorizontal:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.gray2,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex:999,
    },
    heading:{
        fontFamily:"semibold",
        fontSize:SIZES.large,
        color:COLORS.lightWhite,
        marginLeft:5
    },
    textty:{
        fontSize:SIZES.large,
        fontFamily:"semibold",
        color:COLORS.black,
        backgroundColor:COLORS.gray2
    },
    end:{
        fontSize:SIZES.medium,
        fontFamily:"regular",
        color:COLORS.black,
        backgroundColor:COLORS.gray2
    },
    baslik:{
        fontSize:SIZES.large,
        fontFamily:"semibold",
        color:COLORS.black,
        backgroundColor:COLORS.gray2
    },
    lorem:{
        fontSize:SIZES.small,
        fontFamily:"regular"
    }

})
export default styles