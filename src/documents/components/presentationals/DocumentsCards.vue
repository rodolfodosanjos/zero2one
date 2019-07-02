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
        align-self-center
        xs12 sm6 lg3>
        <DocumentCard />
      </v-flex>
      <v-flex
        align-self-center
        xs12 sm6 lg3>
        <DocumentCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import DocumentCard from '@/documents/components/presentationals/DocumentCard'

  export default {
    name: 'Documents',
    components: {
      DocumentCard
    }
  }
</script>