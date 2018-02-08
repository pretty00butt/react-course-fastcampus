import { ReduceStore } from 'flux/utils'

import AppDispatcher from '../AppDispatcher'
import * as types from '../constants'

class MessagesStore extends ReduceStore {
  getInitialState() {
    return {
      messages: [
        {
          User: {
            id: 1,
            username: 'the6thm0nth',
            nickname: '춘식',
          },
          message: '안녕하세요',
        },
      ],
      numberOfMessages: 1,
      isOnMessagesView: false,
    }
  }

  reduce(state, action) {
    let numberOfMessages = state.numberOfMessages
    switch (action.type) {
      case types.TOGGLE_STATUS_OF_MESSAGES_VIEW:
        // 사용자가 메시지 화면에 들어온 경우
        // 메시지 카운트 초기화
        if (action.status) numberOfMessages = 0

        return {
          ...state,
          numberOfMessages,
          isOnMessagesView: action.status,
        }
      case types.GET_MESSAGE:
        const messages = [...state.messages]
        messages.unshift(action.message)

        // 현재 사용자가 메시지 화면이 아닌 경우
        // 메시지 카운트 1 증가
        if (!state.isOnMessagesView) numberOfMessages++

        return {
          ...state,
          messages,
          numberOfMessages,
        }
      default:
        return state
    }
  }
}

export default new MessagesStore(AppDispatcher)
