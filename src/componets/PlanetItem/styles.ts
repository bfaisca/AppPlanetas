import { Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    container:{
        flexDirection:'row',
        justifyContent:'space-between' ,
        borderBottomWidth:1,
        padding:10,
        width: Dimensions.get('screen').width
    },

    title:{
        fontSize:18
    },

    subtitle:{
        fontSize:12,
        textAlign: 'right',
        
    }
}) 