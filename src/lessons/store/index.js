import actions from '@/lessons/actions'
import mutations from '@/lessons/mutations'

export default {
  namespaced: true,
  state: {
    lessons: {
      isLoading: false,
      items: [],
      error: undefined
    }
  },
  actions,
  mutations
}
