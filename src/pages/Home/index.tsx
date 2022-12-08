import {useState,useEffect} from 'react'
import { FlatList, Text, View } from 'react-native';
import PlanetItem from '../../componets/PlanetItem';
import { Planet } from '../../model/planet';
import { getPlanets } from '../../services/planet.service';
import styles from './styles'
 

export default function HomePage() {

  const [ planets, setPlanets ] = useState<Planet[]>([])

  useEffect(() => {
      getPlanets().then(list => {
          setPlanets(list)
      })
  }, [])
    

  return (
    <View style={styles.container}>
        <FlatList
            data={planets}
            renderItem={(elem) => <PlanetItem planet={elem.item}/>}
        />
    </View>
  );
}


