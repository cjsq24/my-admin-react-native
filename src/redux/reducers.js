import { reducer as country } from './country/countryReducer'
import { reducer as state } from './state/stateReducer'
import { reducer as city } from './city/cityReducer'
import { reducer as user } from './user/userReducer'

export default {
   user,
   country,
   state,
   city
}
