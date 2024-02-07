import { StyleSheet } from "react-native-web";
import {COLORS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
        width:190,
        height:300,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary
    },
    imageContainer:{
        flex:1,
        width:180,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover'
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right:SIZES.xSmall 
    }
})

export default styles;
