import { FAILED_REFRESH_MESSAGES, FINISHED_REFRESH_MESSAGES, STARTED_REFRESH_MESSAGES } from '@/messages/mutations/messageMutationTypes'

export default {
  [STARTED_REFRESH_MESSAGES] (state) {
    state.messages = {
      isLoading: true,
      items: []
    }
  },
  [FINISHED_REFRESH_MESSAGES] (state, messages) {
    state.messages = {
      isLoading: false,
      items: messages
    }
  },
  [FAILED_REFRESH_MESSAGES] (state, error) {
    state.messages = {
      isLoading: false,
      items: [],
      error
    }
  }
}
