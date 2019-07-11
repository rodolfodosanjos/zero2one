<template>
  <v-container
    grid-list-md
    text-xs-center>
    <div
      v-if="isLoading"
      class="text-xs-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate />
    </div>
    <v-layout
      v-if="!isLoading"
      row
      align-center
      justify-center
      fill-height>
      <v-flex
        v-for="document in documents"
        :key="document.id"
        align-self-center
        xs12 sm6 lg3>
        <DocumentCard
          :document="document"
          :download="download" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DocumentCard from '@/documents/components/presentationals/DocumentCard'

export default {
  name: 'DocumentsCards',
  props: {
    documents: {
      required: true,
      type: Array
    },
    isLoading: {
      required: true,
      type: Boolean
    },
    refresh: {
      required: true,
      type: Function
    },
    download: {
      required: true,
      type: Function
    }
  },
  components: {
    DocumentCard
  },
  created() {
    this.refresh()
  }
}
</script>
