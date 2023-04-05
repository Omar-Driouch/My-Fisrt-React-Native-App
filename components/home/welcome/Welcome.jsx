import {useState    } from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,


} from 'react-native'

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'; 

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style ={styles.container}> 
       <Text style ={ styles.userName }> Hello Omar  </Text>
       <Text style ={ styles.welcomeMessage }> Find your projects     </Text>
      </View>

      <View style = { styles.searchContainer}>
         <View style ={styles.searchWrapper  }>
          <TextInput style ={styles.searchInput} ></TextInput>
         </View>
      </View>





    </View>
  )
}

export default Welcome