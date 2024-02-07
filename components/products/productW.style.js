import { StyleSheet } from "react-native-web";
import {COLORS,SIZES} from '../../constants';

const styles = StyleSheet.create({
    container:{
        width:182,
        height:190,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary
    }, 
    imageContainer:{
        flex:1,
        width:170,
       height:200,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",     
    },
    image:{
        aspectRatio:1,
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right:SIZES.xSmall 
    }
})

export default styles;
