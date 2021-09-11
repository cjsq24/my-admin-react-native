import axios from '../../helpers/interceptor'
import { actions } from './userReducer'
import { removeItemLocal, setItemLocal } from '../../helpers/localStorage'

const base = '/users'

const controller = {
   list: (_data = {}) => async (dispatch, getState) => {
      await dispatch(actions.loading())
      const {data} = await axios.get(`${base}/list`, {params: _data})
      await dispatch(actions.list(data))
   },
   login: (_data) => async (dispatch, getState) => {
      await dispatch(actions.loading())
      const {data} = await axios.post(`${base}/login`, _data)
      await dispatch(actions.list(data))
      if (data.success) {
         await setItemLocal('cs_user', data.values)
         alert('Logueado con éxito')
      } else {
         alert('Usuario o clave incorrecta')
      }
      return data;
   },
   logout: () => async (dispatch, getState) => {
      return await removeItemLocal('cs_user')
   },
   register: (_data) => async (dispatch, getState) => {
      await dispatch(actions.loading())
      const {data} = await axios.post(`${base}/register`, _data)
      await dispatch(actions.list(data))
      if (data.success) {
         alert('Registrado con éxito')
      } else {
         alert('No se ha podido registrar el usuario')
      }
      return data;
   },
}

export default controller