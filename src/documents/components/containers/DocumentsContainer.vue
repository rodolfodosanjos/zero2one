<template>
  <DocumentsCards
    :documents="documents"
    :refresh="refresh" />
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
  import DocumentsCards from '@/documents/components/presentationals/DocumentsCards'

  export default {
    name: 'DocumentsContainer',
    components: {
      DocumentsCards
    },
    computed: {
      ...mapState({
        documents: state => state.Documents.documents
      })
    },
    methods: {
      ...mapActions('Documents', {
        refresh: GET_DOCUMENTS
      })
    }
  }
</script>