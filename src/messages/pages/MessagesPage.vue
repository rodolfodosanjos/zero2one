<template>
  <div>
    <v-container>
      <ZrPageTitle>Avisos</ZrPageTitle>
      <MessagesContainer />
    </v-container>
  </div>
</template>

<script>
import ZrPageTitle from '@/commons/components/ZrPageTitle'
import MessagesContainer from '@/messages/components/containers/MessagesContainer'

export default {
  name: 'MessagesPage',
  components: {
    MessagesContainer,
    ZrPageTitle
  }
}
</script>
