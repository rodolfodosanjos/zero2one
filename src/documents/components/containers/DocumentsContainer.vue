<template>
  <component
    v-bind:is="presentational"
    :documents="documents"
    :download="download"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { DOWNLOAD_DOCUMENT, GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'
import DocumentsCards from '@/documents/components/presentationals/DocumentsCards'

export default {
  name: 'DocumentsContainer',
  props: {
    lessonId: {
      required: true,
      type: Number
    },
    presentational: {
      required: false,
      default: () => DocumentsCards
    }
  },
  computed: {
    ...mapState({
      documents: state => state[DOCUMENTS_MODULE].documents.items,
      isLoading: state => state[DOCUMENTS_MODULE].documents.isLoading
    })
  },
  methods: {
    ...mapActions(DOCUMENTS_MODULE, {
      refresh: GET_DOCUMENTS,
      download: DOWNLOAD_DOCUMENT
    })
  }
}
</script>
