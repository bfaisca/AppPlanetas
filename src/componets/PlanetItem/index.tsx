import { Text, View } from "react-native"
import styles from "./styles"

type Props={planet:any}

export default function PlanetItem(props: Props){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>{props.planet.name}</Text>
        <Text style={styles.subtitle}>{props.planet.id}º</Text>
        </View>
    )
}