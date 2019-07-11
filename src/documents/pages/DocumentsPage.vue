<template>
  <div>
    <v-container>
      <ZrPageTitle>Documentos</ZrPageTitle>
      <DocumentsContainer />
    </v-container>
  </div>
</template>

<script>
import ZrPageTitle from '@/commons/components/ZrPageTitle'
import DocumentsContainer from '@/documents/components/containers/DocumentsContainer'

export default {
  name: 'DocumentsPage',
  components: {
    DocumentsContainer,
    ZrPageTitle
  }
}
</script>
