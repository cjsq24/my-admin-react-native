import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   list: [],
   payload: {},
   loading: false
}

const countrySlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      loading(state) {
         state.loading = true
      },
      login(state, action) {
         state.payload = action.payload
      },
      register(state, action) {
         return { ...state, payload: action.payload, loading: false }
      },
      list(state, action) {
         //console.log('action', action)
         state.loading = false
         state.list = (action.payload.success) ? action.payload.values : []
      },
      todoToggled(state, action) {
         const todo = state.find(todo => todo.id === action.payload)
         todo.completed = !todo.completed
      },
      todosLoading(state, action) {
         return {
            ...state,
            status: 'loading'
         }
      }
   }
})

export const { actions, reducer } = countrySlice

//export const { loading, list, todoAdded, todoToggled, todosLoading } = countrySlice.actions

//export default countrySlice.reducer