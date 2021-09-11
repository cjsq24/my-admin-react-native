import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, Center, HStack, Pressable, VStack, ScrollView } from 'native-base'

import cityCont from '../../redux/city/cityController'

export default function City({navigation}) {
   const dispatch = useDispatch()
   const city = useSelector(store => store.city)
   
   const [refreshing, setRefreshing] = useState(false);
   
   useEffect(() => {
      dispatch(cityCont.list())
   }, [])

   const onRefresh = async () => {
      setRefreshing(true);
      await dispatch(cityCont.list())
      setRefreshing(false);
   }

   const openState = (state) => {
      navigation.navigate('Location', {state})
   }

   return (
      <Center flex={1} style={{ backgroundColor: 'white' }}>
         <VStack space={4} flex={1} w="90%" mt={4}>

            {city.loading && <Text>Cargando...</Text>}
            {!city.loading && city.list?.length > 0 &&
               <VStack>
                  <HStack style={styles.thead} >
                     <Box flex={5}>
                        <Text style={styles.theadFont}>Name</Text>
                     </Box>
                     <Box flex={5}>
                        <Text style={styles.theadFont}>State</Text>
                     </Box>
                  </HStack>
                  <ScrollView refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                     />
                  }>
                     {city.list.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => openState(item)}>
                           <HStack style={styles.tbody}>
                              <Box flex={5}>
                                 <Text style={styles.tbodyFont}>{item.name}</Text>
                              </Box>
                              <Box flex={5}>
                                 <Text style={styles.tbodyFont}>{item.state?.name}</Text>
                              </Box>
                           </HStack>
                        </TouchableOpacity>
                     ))}
                  </ScrollView>
               </VStack>
            }
         </VStack>
      </Center>
   );
}

const styles = StyleSheet.create({
   item: {
      padding: 10,
      fontSize: 18,
      height: 44,
   },
   thead: {
      padding: 4,
      alignItems: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: 'black'
   },
   theadFont: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   tbody: {
      padding: 4,
      paddingTop: 8,
      paddingBottom: 8,
      alignItems: 'center',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7C7'
   },
   tbodyFont: {
      fontSize: 14
   }
});