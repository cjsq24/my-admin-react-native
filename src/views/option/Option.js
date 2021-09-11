import React from 'react'
import { Box, Button } from 'native-base'
import { useDispatch } from 'react-redux'
import userCont from '../../redux/user/userController'

export default function Option({navigation}) {
   const dispatch = useDispatch()

   const logout = async () => {
      const resp = await dispatch(userCont.logout())
      if (resp) {
         navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
      }
   }

   return (
      <Box>
         <Button onPress={logout}>Logout</Button>
      </Box>
   );
}