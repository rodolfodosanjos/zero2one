import { REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'

export default {
  [REFRESH_DOCUMENTS] (state, documents) {
    state.documents = documents
  }
}