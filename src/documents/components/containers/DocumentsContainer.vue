<template>
  <DocumentsCards
    :documents="documents"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
  import { DOCUMENTS_MODULE } from '@/documents/store/documentsModules'
  import DocumentsCards from '@/documents/components/presentationals/DocumentsCards'

  export default {
    name: 'DocumentsContainer',
    components: {
      DocumentsCards
    },
    computed: {
      ...mapState({
        documents: state => state[DOCUMENTS_MODULE].documents.items,
        isLoading: state => state[DOCUMENTS_MODULE].documents.isLoading
      })
    },
    methods: {
      ...mapActions(DOCUMENTS_MODULE, {
        refresh: GET_DOCUMENTS
      })
    }
  }
</script>