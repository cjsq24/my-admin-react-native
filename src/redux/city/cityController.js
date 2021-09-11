import axios from '../../helpers/interceptor'
import { actions } from './cityReducer'

const base = '/cities'

const controller = {
   list: (_data = {}) => async (dispatch, getState) => {
      await dispatch(actions.loading(data))
      const {data} = await axios.get(`${base}/list`, {params: _data})
      await dispatch(actions.list(data))
   },
}

export default controller