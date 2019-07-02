<template>
  <v-container
    grid-list-md
    text-xs-center>
    <v-layout
      row
      align-center
      justify-center
      fill-height>
      <v-flex
        v-for="document in documents"
        align-self-center
        xs12 sm6 lg3>
        <DocumentCard
          :document="document" />
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
      refresh: {
        required: true,
        type: Function
      }
    },
    components: {
      DocumentCard
    },
    created() {
      this.refresh();
    }
  }
</script>