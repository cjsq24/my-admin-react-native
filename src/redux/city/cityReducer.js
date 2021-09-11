import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   list: [],
   loading: false
}

const stateSlice = createSlice({
   name: 'city',
   initialState,
   reducers: {
      loading(state) {
         state.loading = true
      },
      list(state, action) {
         state.loading = false
         state.list = (action.payload.success) ? action.payload.values : []
      },
   }
})

export const { actions, reducer } = stateSlice