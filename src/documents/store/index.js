import actions from '@/documents/actions'
import mutations from '@/documents/mutations'

export default {
  namespaced: true,
  state: {
    documents: []
  },
  actions,
  mutations
}