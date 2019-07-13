import actions from '@/users/actions'
import mutations from '@/users/mutations'

export default {
  namespaced: true,
  state: {
    user: {
      isLoading: false,
      item: {
        profile: {}
      },
      error: undefined
    }
  },
  actions,
  mutations
}
