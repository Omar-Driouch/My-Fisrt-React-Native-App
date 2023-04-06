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
import { COLORS, icons,SIZES } from '../../../constants'; 

const jopTypes=["Full-Time","Part-Time", "Freelancer"];
var activeJopTypes="Full-Time";

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
        <TextInput style ={styles.searchInput} value ="" onChange={()=>{}} placeholder="Find your projects here..." placeholderTextColor={COLORS.white} ></TextInput>
         </View>
         <TouchableOpacity style={styles.searchBtn} onPress={()=>{}} >
          <Image source={icons.search} resizeMode = "contain" style={styles.searchBtnImage}></Image>
         </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
         data={jopTypes}
         renderItem={({item})=>(  
         <TouchableOpacity  style={styles.tab(jopTypes,item )} onPress={()=>{activeJopTypes=item;router.push(`/search/${item}`)}} >
           <Text style={styles.tabText(activeJopTypes,item)}> {item} </Text>
         </TouchableOpacity>  )}  keyExtractor={item=>item}  contentContainerStyle={{columnGap : SIZES.small}}
         horizontal  snapToAlignment=''  > 

         </FlatList>
      </View>




    </View>
  )
}

export default Welcome