import { FAILED_REFRESH_USER, FINISHED_REFRESH_USER, STARTED_REFRESH_USER } from '@/users/mutations/userMutationTypes'

export default {
  [STARTED_REFRESH_USER]: state =>
    state.user = {
      isLoading: true,
      item: {
        profile: {}
      }
    }
  ,
  [FINISHED_REFRESH_USER]: (state, user) =>
    state.user = {
      isLoading: false,
      item: user
    }
  ,
  [FAILED_REFRESH_USER]: (state, error) =>
    state.user = {
      isLoading: false,
      item: {
        profile: {}
      },
      error
    }
}
