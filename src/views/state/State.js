import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, Center, HStack, Pressable, VStack, ScrollView } from 'native-base'

import stateCont from '../../redux/state/stateController'

export default function State() {
   const dispatch = useDispatch()
   const state = useSelector(store => store.state)

   const [refreshing, setRefreshing] = useState(false);

   const onRefresh =  async () => {
      setRefreshing(true);
      await dispatch(stateCont.list())
      setRefreshing(false);
   }

   useEffect(() => {
      dispatch(stateCont.list())
   }, [])

   return (
      <Center flex={1} style={{ backgroundColor: 'white' }}>
         <VStack space={4} flex={1} w="90%" mt={4}>

            {state.loading && <Text>Cargando...</Text>}
            {!state.loading && state.list?.length > 0 &&
               <VStack>
                  <HStack style={styles.thead} >
                     <Box flex={5}>
                        <Text style={styles.theadFont}>Name</Text>
                     </Box>
                     <Box flex={5}>
                        <Text style={styles.theadFont}>Country</Text>
                     </Box>
                  </HStack>
                  <ScrollView refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                     />
                  }>
                     {state.list.map(({ id, name, code, country }) => (
                        <HStack key={id} style={styles.tbody}>
                           <Box flex={5}>
                              <Text style={styles.tbodyFont}>{name}</Text>
                           </Box>
                           <Box flex={5}>
                              <Text style={styles.tbodyFont}>{country?.name}</Text>
                           </Box>
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
   tbodyFont: {
      fontSize: 14
   }
});