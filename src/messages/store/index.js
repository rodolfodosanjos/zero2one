import actions from '@/messages/actions'
import mutations from '@/messages/mutations'

export default {
  namespaced: true,
  state: {
    messages: {
      isLoading: false,
      items: [],
      error: undefined
    }
  },
  actions,
  mutations
}
