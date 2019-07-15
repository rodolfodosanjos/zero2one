<template>
  <DocumentsCards
    :documents="documents"
    :download="download"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { DOWNLOAD_DOCUMENT, GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'

export default {
  name: 'DocumentsContainer',
  props: {
    lessonId: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapState({
      documents: state => state[DOCUMENTS_MODULE].documents.items,
      isLoading: state => state[DOCUMENTS_MODULE].documents.isLoading
    })
  },
  methods: {
    refresh() {
      this.getDocuments(this.lessonId)
    },
    ...mapActions(DOCUMENTS_MODULE, {
      getDocuments: GET_DOCUMENTS,
      download: DOWNLOAD_DOCUMENT
    })
  }
}
</script>
