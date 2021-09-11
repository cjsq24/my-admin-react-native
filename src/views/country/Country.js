import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, Center, HStack, Pressable, VStack, ScrollView } from 'native-base'

import countryCont from '../../redux/country/countryController'

export default function Country() {
   const dispatch = useDispatch()
   const country = useSelector(store => store.country)

   const [refreshing, setRefreshing] = useState(false);

   const onRefresh =  async () => {
      setRefreshing(true);
      await dispatch(countryCont.list())
      setRefreshing(false);
   }

   //console.log('countryList', country.list)

   useEffect(() => {
      dispatch(countryCont.list())
   }, [])

   return (
      <Center flex={1} style={{ backgroundColor: 'white' }}>
         <VStack space={4} flex={1} w="90%" mt={4}>

            {country.loading && <Text>Cargando...</Text>}
            {!country.loading && country.list?.length > 0 &&
               <VStack>
                  <HStack style={styles.thead} >
                     <Box flex={7}>
                        <Text style={styles.theadFont}>Name</Text>
                     </Box>
                     <Box flex={3}>
                        <Text style={styles.theadFont}>Code</Text>
                     </Box>
                  </HStack>
                  <ScrollView refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                     />
                  }>
                     {country.list.map(({ id, name, code }) => (
                        <HStack key={id} style={styles.tbody}>
                           <Box flex={7}>{name}</Box>
                           <Box flex={3}>{code}</Box>
                        </HStack>
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
});