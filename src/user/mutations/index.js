import { STARTED_REFRESH_USER, FINISHED_REFRESH_USER, FAILED_REFRESH_USER } from '@/user/mutations/userMutationTypes'

export default {
  [STARTED_REFRESH_USER] (state, user) {
    state.user = {
      isLoading: true,
      item: {
        profile: {}
      }
    }
  },
  [FINISHED_REFRESH_USER] (state, user) {
    state.user = {
      isLoading: false,
      item: user
    }
  },
  [FAILED_REFRESH_USER] (state, error) {
    state.user = {
      isLoading: false,
      item: {
        profile: {}
      },
      error
    }
  }
}