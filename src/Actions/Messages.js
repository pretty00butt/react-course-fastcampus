// import request from 'superagent'

import AppDispatcher from '../AppDispatcher'
import * as types from '../constants'

// import { getTokenFromLocalStorage } from '@/utils/auth'

export default {
  getMessage() {},

  toggleStatusOfMessagesView(status) {
    AppDispatcher.dispatch({
      type: types.TOGGLE_STATUS_OF_MESSAGES_VIEW,
      status,
    })
  },
}
