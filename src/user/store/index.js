import actions from '@/user/actions'
import mutations from '@/user/mutations'

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